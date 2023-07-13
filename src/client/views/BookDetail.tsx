import { Link } from 'react-router-dom';
import CommonNavBar from '../components/CommonNavBar';
import Footer from '../components/Footer';

export default () => {
  //book detail
  return (
    <>
      <CommonNavBar />
      <h3>聪明人的个人成长</h3>
      <div>
        <Link to="/">返回首页</Link>
      </div>
      <Footer />
    </>
  );
};
