import NavUl from '../NavUl';
import styles from './navBar.scss';
const NavBar = () => {
  return (
    <div className={styles['nav-bar-wrapper']}>
      <div className={styles.logo}>
        <img src="/src/assets/logo_small.png" width="100%" />
      </div>
      <input type="text" className={styles['search-input']} />
      <NavUl />
    </div>
  );
};

export default NavBar;
