import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import axios from '../../request';
import styles from './bookDetail.scss';
const BookDetail = () => {
  const { id: bookId } = useParams();
  const [bookInfo, setBookInfo] = useState<BookDetail>();

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

  console.log('bookInfo', bookInfo);

  return (
    <div className={styles['detail-wrapper']}>
      <NavBar />
      <div className={styles['content-wrapper']}>
        <div className={styles['book-intro']}>
          <img className={styles['book-intro-left']} src={bookInfo?.book_info?.cover}></img>
          <div className={styles['book-intro-right']}>
            <div className={styles['book-intro-head']}>
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
          <div className={styles['book-review-title']}>微信读书推荐值{bookInfo?.review_info?.recommond_info?.platform_point}</div>
          <div className={styles['book-review-content']}>
            <div>
              <div className={styles['book-review-category']}></div>
              <div>{bookInfo?.review_info?.recommond_info?.total}人点评</div>
            </div>
            <div>
              <div>
                <span>推荐</span>
                <span className={styles['book-review-bar']}></span>
              </div>
              <div>
                <span>一般</span>
                <span></span>
              </div>
              <div>
                <span>不行</span>
              </div>
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
                <span>--</span>
              </div>
              <div>{item?.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
