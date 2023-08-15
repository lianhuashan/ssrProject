import styles from './searchMask.scss';
import globalStyles from '../../style/base.scss';
import Mask from '../common/Mask';
import request from '../../request';
import { ChangeEvent, ChangeEventHandler, ReactEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { SearchBook, SearchResult, SearchTip, SearchTipRecord } from '../../types';
import { Link } from 'react-router-dom';
import { debounce, throttle } from '../../utils/common';
interface SearchMaskProps {
  visible?: boolean;
  onMaskClick?: () => void;
  onClose?: () => void;
}
const SearchMask = ({ visible, onMaskClick, onClose }: SearchMaskProps) => {
  const [searchTips, setSearchTips] = useState<SearchTipRecord[]>();
  const [searchStr, setSearchStr] = useState<string>();
  const [globalBookList, setGlobalBookList] = useState<SearchBook[]>();
  const [hasMore, setHasMore] = useState<number>(0);
  const [showDropdown, setShowDropdown] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const authorResult = searchTips?.filter((item) => item.type === 1);
  const categoryResult = searchTips?.filter((item) => item.type === 3);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 1000);
  }, []);

  const handleSearchTips = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    const str = e.target.value;
    const result = await request.get<null, ResType<SearchTip>>('/v1/search/tip', { params: { qs: encodeURIComponent(str) } });
    if (result.state === 200 && result.data.records) {
      setSearchTips(result.data.records);
    }
  };

  const handleSearch = async (str?: string) => {
    setShowDropdown(false);
    const qs = str || searchStr;
    const result = await request.get<null, ResType<SearchResult>>('/v1/search/global', {
      params: { qs: encodeURIComponent(qs || ''), count: 40 }
    });
    if (result.state === 200 && result.data.books) {
      setGlobalBookList(result.data.books);
      setHasMore(result.data.hasMore);
    }
  };

  const handleKeydown = useCallback(
    debounce((e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
      console.log('keydown', showDropdown);
      if (!showDropdown) {
        setShowDropdown(true);
      }
    }, 2 * 1000),
    [showDropdown]
  );

  return (
    <Mask visible={visible} transparent={false} disableBodyScroll>
      <div className={styles['search-page']}>
        <div className={styles['close-btn']} onClick={onClose}></div>
        <a className={styles.header}></a>
        <div className={styles['search-wrapper']}>
          <span className={styles['search-icon-left']}></span>
          <input type="text" ref={inputRef} className={styles['search-input']} onChange={handleSearchTips} onKeyDown={handleKeydown} />
          <span className={styles['search-icon-right']}></span>
          {searchTips?.length && showDropdown ? (
            <div className={styles['search-input-dropdown']}>
              {searchTips.slice(0, 8).map((item, idx) => (
                <div key={idx} className={styles['search-input-dropdown-item']} onClick={() => handleSearch(item.word)}>
                  {item.word}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {authorResult?.length && !showDropdown ? (
          <div className={styles['result-author-wrapper']}>
            {authorResult.map((item, idx) => (
              <div className={`${styles['result-item']} ${styles['result-author-item']}`} key={idx}>
                <div className={`${styles['result-item-left']} ${styles['result-author-item-left']}`}></div>
                <div className={styles['result-item-right']}>
                  <div className={styles['result-text-title']}>{item.word}</div>
                  <div className={styles['result-text-author']}>
                    查看作家全部书籍<span className={styles['result-splitor-dot']}>.</span>共{item.totalCount}本
                    <span className={styles['result-icon-more']}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {categoryResult?.length && !showDropdown ? (
          <div className={styles['result-category-wrapper']}>
            {categoryResult.map((item, idx) => (
              <div className={`${styles['result-item']} ${styles['result-category-item']}`} key={idx}>
                <div className={`${styles['result-item-left']} ${styles['result-category-item-left']}`}></div>
                <div className={styles['result-item-right']}>
                  <div className={styles['result-text-title']}>{item.word}</div>
                  <div className={styles['result-text-author']}>
                    查看作家全部书籍<span className={styles['result-splitor-dot']}>.</span>共{item.totalCount}本
                    <span className={styles['result-icon-more']}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {globalBookList?.length ? (
          <div className={styles['result-book-wrapper']}>
            {globalBookList.map((item, idx) => (
              <div className={`${styles['result-item']} ${styles['result-book-item']}`} key={idx}>
                <div className={`${styles['result-item-left']} ${styles['result-book-item-left']}`}>
                  <img src={item.bookInfo.cover} width="100%" height="100%" />
                </div>
                <div className={styles['result-item-right']}>
                  <div className={styles['result-text-title']}>{item.bookInfo.title}</div>
                  <div className={styles['result-text-info']}>{item.bookInfo.author}</div>
                  <div className={`${styles['result-text-info']} ${globalStyles['text-multi-line-ellipsis']}`}>{item.bookInfo.intro}</div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div></div>
      </div>
    </Mask>
  );
};

export default SearchMask;
