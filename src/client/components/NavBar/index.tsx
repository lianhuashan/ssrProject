import { useNavigate } from 'react-router-dom';
import useNavBar from '../../hooks/useNavBar';
import styles from './navBar.scss';
const NavBar = () => {
  const navigate = useNavigate();
  const { handleLogin, handleTransfer, handleSwitchPhone, handleSwitchVersion } = useNavBar();
  return (
    <div className={styles['nav-bar-wrapper']}>
      <div className={styles['nav-bar']}>
        <div className={styles.logo} onClick={() => navigate('/')}></div>
        <input type="text" className={styles['search-input']} />
        <ul>
          <li onClick={() => navigate('/')}>首页</li>
          <li onClick={handleTransfer}>传书到手机</li>
          <li onClick={handleSwitchVersion}>墨水屏版</li>
          <li onClick={handleSwitchPhone}>手机版</li>
          <li onClick={handleLogin}>登录</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
