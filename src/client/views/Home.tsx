import React, { useEffect, useState } from 'react';
import { useLoaderData, useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import styled, { createGlobalStyle } from 'styled-components';
import axios from '../request';
import { IndexCategory } from '../types';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  .flex-row-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .flex-col-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .category-title-img {
    width: 180px;
    height: 32px;
  }
  .category-title-desp {
    font-size: 12px;
  }

  .book-cover {
    font-size: 14px;
    margin-bottom: 20px;

    &-img {
      width: 40px;
      height: 60px;
    }
    &-order,
    &-title {
      color: #fff;
    }
    &-author {
      color: #cacaca;
    }
  }
`;

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
      {data?.topCategories?.map((topCategory) => (
        <div key={topCategory.CategoryId}>
          <div className="category-title flex-row-box">
            <img
              data-src={topCategory.ranklistCover?.chart_title}
              src={topCategory.ranklistCover?.chart_title}
              className="category-title-img"
            />
            <span>{topCategory.ranklistCover?.desc}</span>
          </div>
          <div className="book-cover-list flex-col-box">
            {topCategory.lectureBooks?.slice(0, 6).map((lectureBook, index) => (
              <div className="book-cover flex-row-box" key={index}>
                <img data-src={lectureBook.bookInfo?.cover} src={lectureBook.bookInfo?.cover} className="book-cover-img"></img>
                <div className="flex-row-box">
                  <div className="book-cover-order">{index + 1}</div>
                  <div className="flex-col-box">
                    <span className="book-cover-title">{lectureBook.bookInfo?.title}</span>
                    <span className="book-cover-author">{lectureBook.bookInfo?.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </Wrapper>
  );
};
export default Home;
