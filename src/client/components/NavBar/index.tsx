import NavUl from '../NavUl';
import styles from './navBar.scss';
const NavBar = () => {
  return (
    <div className={styles['nav-bar-wrapper']}>
      <div className={styles['nav-bar']}>
        <div className={styles.logo}></div>
        <input type="text" className={styles['search-input']} />
        <ul>
          <li>首页</li>
          <li>传书到手机</li>
          <li>墨水屏版</li>
          <li>手机版</li>
          <li>登录</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
