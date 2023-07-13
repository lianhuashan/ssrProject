import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <>
      <ul style={{ display: 'inline-block' }}>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/category">排行榜</Link>
        </li>
      </ul>
    </>
  );
};
