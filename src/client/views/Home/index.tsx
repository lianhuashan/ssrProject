import React, { useEffect, useState } from 'react';
import { useLoaderData, useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeNavBar from '../../components/HomeNavBar';
import Footer from '../../components/Footer';
import Counter from '../../components/Counter';
import styled, { createGlobalStyle } from 'styled-components';
import axios from '../../request';
import { IndexCategory } from '../../types';
import SearchBar from '../../components/SearchBar';
import styles from './home.scss';
import globalStyles from '../../style/index.scss';
const keywords = ['飙升', '新书', '总榜', '神作榜'];

const Home = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState<IndexCategory>(loaderData as any);

  useEffect(() => {
    if (!loaderData) {
      axios('/v1/index').then((res: any) => {
        setData(res);
      });
    }
  }, [loaderData]);
  return (
    <div className={styles.wrapper}>
      <HomeNavBar />
      <SearchBar />
      llll1111222333444777888999000===
      <div className={styles['top-category']}>
        {data &&
          data?.topCategories
            ?.filter((item) => item.title && new RegExp(keywords.join('|')).test(item.title))
            .map((topCategory) => (
              <div key={topCategory.CategoryId} className={styles['category-block']}>
                <div>
                  <img
                    data-src={topCategory.ranklistCover?.chart_title}
                    src={topCategory.ranklistCover?.chart_title}
                    className={styles['category-title-img']}
                  />
                  <span className={`${styles['category-title-desp']} ${globalStyles['text-multi-line-ellipsis']}`}>
                    {topCategory.ranklistCover?.desc}
                  </span>
                </div>
                <div className={`${styles['book-cover-list']} ${globalStyles['flex-col-box']}`}>
                  {topCategory.lectureBooks?.slice(0, 6).map((lectureBook, index) => (
                    <div className={styles['book-cover']} key={index}>
                      <img data-src={lectureBook.bookInfo?.cover} src={lectureBook.bookInfo?.cover} className="book-cover-img"></img>
                      <div className={styles['book-cover-order']}>{index + 1}</div>
                      <div className={styles['book-cover-intro']}>
                        <div className={globalStyles['text-title'] + ' ' + globalStyles['text-multi-line-ellipsis']}>
                          {lectureBook.bookInfo?.title}
                        </div>
                        <div className={globalStyles['text-sub-title']}>{lectureBook.bookInfo?.author}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a className={`${globalStyles['text-title']} ${globalStyles['text-gray']}`}>查看全部 </a>
              </div>
            ))}
      </div>
      <div className={styles['category']}>
        <h2>分类榜单</h2>
        <div className={styles['category-list']}>
          {data?.categories
            ?.filter((item) => item.parentCategoryId === '0')
            ?.slice(0, 11)
            ?.map((item) => (
              <a className={styles['category-list-item']} key={item.title}>
                <span>{item.title}</span>&nbsp;.&nbsp;<span>{item.totalCount}本</span>
              </a>
            ))}
          <a className={styles['category-list-item']}>查看全部&nbsp;.&nbsp;{data.categories?.length}个</a>
        </div>
      </div>
    </div>
  );
};
export default Home;
