import React, { useState } from 'react';
import styled from 'styled-components';
import sousuo from '../../assets/sousuo.png';
import enter from '../../assets/enter.png';

const SearchInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 650px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  background-color: rgba(238, 240, 244, 0.1);
  border: none;
  outline: none;
  padding: 4px 40px;
  box-sizing: border-box;
  caret-color: #fafafa;
  color: #fafafa;
  font-size: 14px;
  &:active {
    border: none;
    outline: none;
  }
`;

const Wrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111213;
  text-align: center;
  > div {
    margin-top: 30px;
    width: 650px;
    height: 50px;
    position: relative;
    .icon-search {
      content: '';
      position: absolute;
      top: 12px;
      left: 8px;
      width: 24px;
      height: 24px;
      background: center / 80% no-repeat url(${sousuo});
      z-index: 1;
      display: inline-block;
    }
    .icon-enter {
      content: '';
      position: absolute;
      top: 10px;
      right: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: center / 80% no-repeat url(${enter}) #353639;
      z-index: 1;
    }
  }
  h1 {
    line-height: 32px;
    text-align: center;
    img {
      width: 160px;
      height: 36px;
    }
  }
`;
export default () => {
  const [searching, setSearching] = useState<boolean>(false);
  const handleClick = () => {
    setSearching(!searching);
  };
  return (
    <Wrapper>
      <h1>
        <img src="https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_header_logo_2x.8d460b95.png" />
      </h1>
      <div>
        <span className="icon-search"></span>
        <SearchInput type="text" onClick={handleClick} placeholder="搜索" />
        <span className="icon-enter"></span>
      </div>
    </Wrapper>
  );
};
