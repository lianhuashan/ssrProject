import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './homeNavBar.scss';
import Mask from '../common/Mask';
import SearchMask from '../SearchMask';

export default () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const handleTransfer = () => {
    setShowLogin(true);
  };
  const handleSwitchVersion = () => {
    setShowSearch(true);
  };
  const handleSwitchPhone = () => {};
  const handleLogin = () => {
    setShowLogin(true);
  };
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <a className={styles.link} onClick={handleTransfer}>
            传书到手机
          </a>
        </li>
        <li>
          <a className={styles.link} href="https://ink.qq.com/">
            墨水屏版
          </a>
        </li>
        <li>
          <a className={styles.link} onClick={handleSwitchPhone}>
            手机版
          </a>
        </li>
        <li>
          <a className={styles.link} onClick={handleLogin}>
            登录
          </a>
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
        <input type="text" className={styles['search-input']} onClick={() => setShowSearch(true)} placeholder="搜索" />
        <span className={styles['search-icon-right']}></span>
      </div>
      <Mask visible={showLogin} disableBodyScroll onMaskClick={() => setShowLogin(false)}>
        <div className={styles['qrcode-wrapper']}>
          <div className={styles['qrcode-outer']}>
            <div className={styles['close-btn']}></div>
            <div className={styles.qrcode}>
              <img
                src="data:image/png;base64,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"
                alt="qrcode"
              />
            </div>
            <div className={styles['qrcode-status-text']}> 扫码登录微信读书</div>
          </div>
        </div>
      </Mask>
      <SearchMask visible={showSearch} onMaskClick={() => setShowSearch(false)} />
    </div>
  );
};
