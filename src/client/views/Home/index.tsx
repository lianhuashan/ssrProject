import React, { useEffect, useState } from 'react';
import { useLoaderData, useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeNavBar from '../../components/HomeNavBar';
import Footer from '../../components/Footer';
import Counter from '../../components/Counter';
import styled, { createGlobalStyle } from 'styled-components';
import axios from '../../request';
import { IndexCategory } from '../../types';
import styles from './home.scss';
import globalStyles from '../../style/base.scss';
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
    <div>
      <HomeNavBar />
      <div className={styles['category-container']}>
        <div className={styles['top-category-container']}>
          {data &&
            data?.topCategories
              ?.filter((item) => item.title && new RegExp(keywords.join('|')).test(item.title))
              .map((topCategory) => (
                <div key={topCategory.CategoryId} className={styles['top-category-item']}>
                  <div>
                    <img
                      data-src={topCategory.ranklistCover?.chart_title}
                      src={topCategory.ranklistCover?.chart_title}
                      className={styles['top-category-head-title']}
                    />
                    <div className={`${styles['top-category-head-desp']} ${globalStyles['text-multi-line-ellipsis']}`}>
                      {topCategory.ranklistCover?.desc}
                    </div>
                  </div>
                  <div className={`${styles['top-book-container']} ${globalStyles['flex-col-box']}`}>
                    {topCategory.lectureBooks?.slice(0, 6).map((lectureBook, index) => (
                      <div className={styles['top-book-item']} key={index}>
                        <img
                          data-src={lectureBook.bookInfo?.cover}
                          src={lectureBook.bookInfo?.cover}
                          className={styles['top-book-item-cover']}></img>
                        <div className={styles['top-book-item-order']}>{index + 1}</div>
                        <div className={styles['top-book-item-intro']}>
                          <div className={globalStyles['text-title'] + ' ' + globalStyles['text-multi-line-ellipsis']}>
                            {lectureBook.bookInfo?.title}
                          </div>
                          <a className={globalStyles['text-sub-title']}>{lectureBook.bookInfo?.author}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a className={`${styles['top-category-show-all']} ${globalStyles['text-title']} ${globalStyles['text-sub-title']}`}>
                    查看全部
                  </a>
                </div>
              ))}
        </div>
        <div>
          <h2 className={styles['category-detail-head']}>分类榜单</h2>
          <div className={styles['category-detail-items-container']}>
            {data?.categories
              ?.filter((item) => item.parentCategoryId === '0')
              ?.slice(0, 11)
              ?.map((item) => (
                <a className={styles['category-detail-item']} key={item.title}>
                  <span>{item.title}</span>&nbsp;.&nbsp;<span>{item.totalCount}本</span>
                </a>
              ))}
            <a className={styles['category-detail-item']}>查看全部&nbsp;.&nbsp;{data.categories?.length}个</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
