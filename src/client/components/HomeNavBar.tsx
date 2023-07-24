import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #cacaca;
  :hover {
    color: #fafafa;
  }
`;
const StyledUl = styled.ul`
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;
  height: 44px;
  line-height: 44px;
  color: #fafafa;
  text-align: right;
  background: rgba(0, 0, 0, 0.7);
  > li {
    list-style: none;
    margin-right: 36px;

    li:has(+ li):after {
      content: '|';
      color: #fafafa;
      margin-left: 15px;
    }
  }
`;
export default () => {
  return (
    <>
      <StyledUl>
        <li>
          <StyledLink to="/">传书到手机</StyledLink>
        </li>
        <li>
          <StyledLink to="/category">墨水屏版</StyledLink>
        </li>
        <li>
          <StyledLink to="/category">手机版</StyledLink>
        </li>
        <li>
          <StyledLink to="/category">登录</StyledLink>
        </li>
      </StyledUl>
    </>
  );
};
