import styles from './searchMask.scss';
import Mask from '../common/Mask';
interface SearchMaskProps {
  visible?: boolean;
  onMaskClick?: () => void;
}
const SearchMask = ({ visible, onMaskClick }: SearchMaskProps) => {
  const handleSearch = () => {};
  return (
    <Mask visible={visible}>
      <div className={styles['search-page']}>
        <a className={styles.header}></a>
        <div className={styles['search-wrapper']}>
          <span className={styles['search-icon-left']}></span>
          <input type="text" className={styles['search-input']} onChange={handleSearch} />
          <span className={styles['search-icon-right']}></span>
          <div className="search-input-dropdown"></div>
        </div>
        <div className="result-author-wrapper"></div>
        <div className="result-category-wrapper"></div>
        <div className="result-book-wrapper"></div>
      </div>
    </Mask>
  );
};

export default SearchMask;
