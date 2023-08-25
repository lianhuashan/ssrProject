import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { useEffect, useRef, useState } from 'react';
import axios from '../../request';
import styles from './bookDetail.scss';
import globalStyle from '../../style/base.scss';

enum REVIEW_TYPE {
  support = '推荐',
  fine = '还行',
  bad = '一般'
}
const BookDetail = () => {
  const { id: bookId } = useParams();
  const [bookInfo, setBookInfo] = useState<BookDetail>();
  const [showFixedFooter, setShowFixedFooter] = useState<boolean>();
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchBookInfo = async (bookId: string) => {
      const result = await axios.get<null, ResType<BookDetail>>('/v1/book_detail');
      if (result.state === 200) {
        setBookInfo(result.data);
      }
    };

    if (bookId) {
      fetchBookInfo(bookId);
    }
  }, [bookId]);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entrys) => {
        entrys.forEach((entry) => {
          if (entry.intersectionRatio <= 0) {
            setShowFixedFooter(true);
          } else {
            setShowFixedFooter(false);
          }
        });
      },
      { root: null, rootMargin: '-72px 0px 0px 0px', threshold: 0 }
    );
    headerRef?.current && observer.observe(headerRef?.current);
  }, []);

  console.log('bookInfo', bookInfo);

  return (
    <div className={styles['detail-wrapper']}>
      <NavBar />
      {showFixedFooter && (
        <div className={styles['detail-fixed-footer']}>
          <div className={styles['detail-fixed-footer-inner'] + ' ' + globalStyle['common-flex-box']}>
            <img src={bookInfo?.book_info?.cover} alt="" className={styles['detail-fixed-footer-cover']} />
            <div className="detail-fixed-footer-intro">
              <div className={globalStyle['common-title']}>{bookInfo?.book_info?.title}</div>
              <div className={globalStyle['text-sub-title']}>{bookInfo?.book_info?.author}</div>
            </div>
            <div className={globalStyle['common-flex-box-right']}>
              <div className={globalStyle['common-action-btn']}>加入书架</div>
              <div className={globalStyle['common-action-btn']}>开始阅读</div>
            </div>
          </div>
        </div>
      )}

      <div className={styles['content-wrapper']}>
        <div className={styles['book-intro']}>
          <img className={styles['book-intro-left']} src={bookInfo?.book_info?.cover}></img>
          <div>
            <div className={styles['book-intro-head']} ref={headerRef}>
              <div>
                <div className={styles['book-intro-title']}>{bookInfo?.book_info?.title}</div>
                <div className={styles['book-intro-author']}>{bookInfo?.book_info?.author}</div>
              </div>
              <div className={styles['book-intro-action-btn-wrapper']}>
                <button className={styles['book-intro-action-btn']}>加入书架</button>
                <button className={styles['book-intro-action-btn']}>开始阅读</button>
              </div>
            </div>

            <img className={styles['book-intro-category']} src={bookInfo?.book_info?.category?.[0]?.cover?.small_pic}></img>
            <div className={styles['book-intro-text']}>{bookInfo?.book_info?.brief}</div>
          </div>
        </div>
        <div className={styles['book-review']}>
          <div className={styles['book-review-title']}>
            微信读书推荐值{+(bookInfo?.review_info?.recommond_info?.platform_point || 0) / 10 + '%'}
          </div>
          <div className={styles['book-review-content']}>
            <div>
              <img className={styles['book-review-category']} src={bookInfo?.review_info?.category?.[0]?.cover?.small_pic}></img>
              <div className={globalStyle['text-sub-title']}>{bookInfo?.review_info?.recommond_info?.total}人点评</div>
            </div>
            <div className={styles['book-review-right']}>
              <div className={styles['book-review-right-item']}>
                <div>推荐</div>
                <div className={styles['book-review-progress']}>
                  <div
                    className={styles['book-review-progress-bar']}
                    style={{
                      width:
                        ((bookInfo?.review_info?.recommond_info?.support || 0) * 100) /
                          (bookInfo?.review_info?.recommond_info?.total || 1) +
                        '%'
                    }}></div>
                </div>
              </div>
              <div className={styles['book-review-right-item']}>
                <div>一般</div>
                <div className={styles['book-review-progress']}>
                  <div
                    className={styles['book-review-progress-bar']}
                    style={{
                      width:
                        ((bookInfo?.review_info?.recommond_info?.fine || 0) * 100) / (bookInfo?.review_info?.recommond_info?.total || 1) +
                        '%'
                    }}></div>
                </div>
              </div>
              <div className={styles['book-review-right-item']}>
                <div>不行</div>
                <div className={styles['book-review-progress']}>
                  <div
                    className={styles['book-review-progress-bar']}
                    style={{
                      width:
                        ((bookInfo?.review_info?.recommond_info?.bad || 0) * 100) / (bookInfo?.review_info?.recommond_info?.total || 1) +
                        '%'
                    }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['book-review-action-wrapper']}>
            <div className={styles['book-review-action-btn']}>
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>book_ratings_button_grade_good</title>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Icon" transform="translate(1.000000, 3.000000)">
                    <path
                      d="M2,6 C2,8.48528137 4.23857625,10.5 7,10.5 C9.76142375,10.5 12,8.48528137 12,6"
                      stroke="#a0a0a2"
                      stroke-width="2"></path>
                    <circle fill="#a0a0a2" cx="2" cy="1.5" r="1.5"></circle>
                    <circle fill="#a0a0a2" cx="12" cy="1.5" r="1.5"></circle>
                  </g>
                </g>
              </svg>

              <span>推荐</span>
            </div>
            <div className={styles['book-review-action-btn']}>
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>book_ratings_button_grade_fair</title>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Icon" transform="translate(1.000000, 3.000000)">
                    <line x1="2" y1="9" x2="12" y2="9" stroke="#a0a0a2" stroke-width="2"></line>
                    <circle fill="#a0a0a2" cx="2" cy="1.5" r="1.5"></circle>
                    <circle fill="#a0a0a2" cx="12" cy="1.5" r="1.5"></circle>
                  </g>
                </g>
              </svg>
              <span>还行</span>
            </div>
            <div className={styles['book-review-action-btn']}>
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>book_ratings_button_grade_poor</title>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Icon" transform="translate(1.000000, 3.000000)">
                    <path
                      d="M2,6 C2,8.48528137 4.23857625,10.5 7,10.5 C9.76142375,10.5 12,8.48528137 12,6"
                      stroke="#a0a0a2"
                      stroke-width="2"
                      transform="translate(7.000000, 8.250000) scale(1, -1) translate(-7.000000, -8.250000) "></path>
                    <circle fill="#a0a0a2" cx="2" cy="1.5" r="1.5"></circle>
                    <circle fill="#a0a0a2" cx="12" cy="1.5" r="1.5"></circle>
                  </g>
                </g>
              </svg>
              <span>一般</span>{' '}
            </div>
          </div>
        </div>
        <div className={styles['book-comment']}>
          <div>精彩点评</div>
          {bookInfo?.comment_info?.map((item, index) => (
            <div className={styles['book-comment-item']} key={index}>
              <div className={styles['book-comment-item-author']}>
                <img className={styles['book-comment-item-author-avatar']} src={item?.author?.avatar}></img>
                <span>{item?.author?.nick_name}</span>
                <span>{REVIEW_TYPE[item.reviewType]}</span>
                <span></span>
              </div>
              <div className={styles['book-comment-item-content']}>{item?.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
