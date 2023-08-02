import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homeNavBar.scss';

export default () => {
  const handleClick = () => {};
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <Link className={styles.link} to="/">
            传书到手机
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/category">
            墨水屏版
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/">
            手机版
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/">
            登录
          </Link>
        </li>
      </ul>
      <h1>
        <img
          className={styles.logo}
          src="https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_header_logo_2x.8d460b95.png"
        />
      </h1>
      <div className={styles['search-wrapper']}>
        <span className={styles['search-icon-left']}></span>
        <input type="text" className={styles['search-input']} onClick={handleClick} placeholder="搜索" />
        <span className={styles['search-icon-right']}></span>
      </div>
    </div>
  );
};
