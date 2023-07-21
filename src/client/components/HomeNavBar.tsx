import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: inline-flex;
  width: 600px;
  height: 44px;
  line-height: 44px;
  color: #fafafa;
  > li {
    border-left: 1px solid gray;
  }
`;
export default () => {
  return (
    <>
      <StyledUl>
        <li>
          <Link to="/">传书到手机</Link>
        </li>
        <li>
          <Link to="/category">墨水屏版</Link>
        </li>
        <li>
          <Link to="/category">手机版</Link>
        </li>
        <li>
          <Link to="/category">登录</Link>
        </li>
      </StyledUl>
    </>
  );
};
