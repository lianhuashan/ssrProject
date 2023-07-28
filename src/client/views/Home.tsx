import React, { useEffect, useState } from 'react';
import { useLoaderData, useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import styled, { createGlobalStyle } from 'styled-components';
import axios from '../request';
import { IndexCategory } from '../types';
import SearchBar from '../components/SearchBar';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);

  .top-category {
    width: 80%;
    margin: 0 auto;
    background: hsla(0, 0%, 0%, 0.9);
    padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .category-block {
      width: 50%;
      /* max-width: 600px; */
      margin-top: 30px;
    }
  }
  .category-title-img {
    width: 240px;
    height: 32px;
  }
  .category-title-desp {
    font-size: 12px;
    display: block;
    margin-top: 4px;
  }

  .book-cover-list {
    margin-top: 20px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .book-cover {
    font-size: 14px;
    margin-bottom: 20px;
    max-width: 240px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &-img {
      min-width: 60px;
      height: 80px;
    }
    &-order {
      font-weight: 700;
    }
    &-intro,
    &-order {
      margin-left: 12px;
    }

    &-intro {
      div:first-of-type {
        margin-bottom: 4px;
      }
    }
  }

  .category {
    width: 80%;
    margin: 0 auto;
    padding: 0 50px;
    h2 {
      margin-top: 30px;
      font-size: 18px;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-list-item {
      margin-top: 30px;
      width: 33.3%;
      display: block;
    }
  }
`;

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
    <Wrapper>
      <HomeNavBar />
      <SearchBar />
      <div className="top-category">
        {data?.topCategories
          ?.filter((item) => item.title && new RegExp(keywords.join('|')).test(item.title))
          .map((topCategory) => (
            <div key={topCategory.CategoryId} className="category-block">
              <div className="category-title">
                <img
                  data-src={topCategory.ranklistCover?.chart_title}
                  src={topCategory.ranklistCover?.chart_title}
                  className="category-title-img"
                />
                <span className="category-title-desp  text-multi-line-ellipsis">{topCategory.ranklistCover?.desc}</span>
              </div>
              <div className="book-cover-list flex-col-box">
                {topCategory.lectureBooks?.slice(0, 6).map((lectureBook, index) => (
                  <div className="book-cover" key={index}>
                    <img data-src={lectureBook.bookInfo?.cover} src={lectureBook.bookInfo?.cover} className="book-cover-img"></img>
                    <div className="book-cover-order">{index + 1}</div>
                    <div className="book-cover-intro">
                      <div className="text-title text-multi-line-ellipsis">{lectureBook.bookInfo?.title}</div>
                      <div className="text-sub-title">{lectureBook.bookInfo?.author}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="category-show-all text-title text-gray">查看全部 </a>
            </div>
          ))}
      </div>
      <div className="category">
        <h2>分类榜单</h2>
        <div className="category-list">
          {data?.categories
            ?.filter((item) => item.parentCategoryId === '0')
            ?.slice(0, 11)
            ?.map((item) => (
              <a className="category-list-item" key={item.title}>
                <span>{item.title}</span>&nbsp;.&nbsp;<span>{item.totalCount}本</span>
              </a>
            ))}
          <a className="category-list-item">查看全部&nbsp;.&nbsp;{data.categories?.length}个</a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
