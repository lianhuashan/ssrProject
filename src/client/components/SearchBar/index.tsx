import React, { useState } from 'react';
import styles from './styles.scss';

export default () => {
  const [searching, setSearching] = useState<boolean>(false);
  const handleClick = () => {
    setSearching(!searching);
  };
  return (
    <div className={styles.wrapper}>
      llllaaa
      <h1>
        <img src="https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_header_logo_2x.8d460b95.png" />
      </h1>
      <div>
        <span className={styles['icon-search']}></span>
        <input className={styles['search-input']} type="text" onClick={handleClick} placeholder="搜索" />
        <span className={styles['icon-enter']}></span>
      </div>
    </div>
  );
};
