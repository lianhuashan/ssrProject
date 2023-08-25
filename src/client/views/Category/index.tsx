import { useEffect, useState } from 'react';
import { CategoryInfo } from '../../../../types/business/category';
import NavBar from '../../components/NavBar';
import styles from './category.scss';
import globalStyles from '../../style/base.scss';
import axios from '../../request';
import { Navigate, useNavigate } from 'react-router-dom';

const Category = () => {
  const [data, setData] = useState<CategoryInfo>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<null, ResType<CategoryInfo>>('/v1/category');
      if (result.state === 200) {
        setData(result.data);
      }
    };
    fetchData();
  }, []);

  console.log('>>data', data);

  return (
    <div className={styles['category-wrapper']}>
      <NavBar />
      <div className={styles['category-content']}>
        <div className={styles['category-left-menu']}>
          {data?.hot_category?.map((cItem, idx) => (
            <div
              key={cItem.category_name}
              className={
                styles['category-left-menu-item'] +
                ' ' +
                (cItem.category_name === data.current?.category_name ? styles['category-left-menu-item-active'] : '')
              }
              style={{ backgroundImage: `url(${cItem.cover?.eink_chart_title})` }}></div>
          ))}
          {data?.category?.map((item, idx) => (
            <div
              className={
                styles['category-left-menu-item'] +
                ' ' +
                (item.category_name === data.current?.category_name ? styles['category-left-menu-item-active'] : '')
              }>
              {item.category_name}
            </div>
          ))}
        </div>
        <div>
          <div className={styles['category-right-head']}>{data?.current?.category_name}</div>
          <div>
            {data?.book_list?.map((book, idx) => (
              <div className={styles['category-book-item']}>
                <a onClick={() => navigate(`/book/detail/${book.book_info?.book_id}`)}></a>
                <div>{idx + 1}</div>
                <div>
                  <img width="100%" src={book.book_info?.cover} />
                </div>
                <div className={styles['category-book-item-intro']}>
                  <p className={styles['category-book-item-intro-title']}>{book.book_info?.title}</p>
                  <p>{book.book_info?.author}</p>
                  <p>
                    <span>{book.reader_info?.today}人阅读</span>
                    <span>推荐值{book.review_info?.recommond_info?.platform_point}</span>
                  </p>
                  <p className={globalStyles['text-multi-line-ellipsis']}>{book.book_info?.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
