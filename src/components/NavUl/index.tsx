import { useState } from 'react';
import styles from './navUl.scss';

const NavUl = () => {
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
  );
};

export default NavUl;
