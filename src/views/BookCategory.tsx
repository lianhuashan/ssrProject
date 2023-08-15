import { Link } from 'react-router-dom';
import CommonNavBar from '../components/CommonNavBar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const CategoryBlock = styled.div`
  width: 200px;
  height: 100px;
  background: url('https://weread-1258476243.file.myqcloud.com/assets/ranklist.rising.chart_title.YqPFOS9Gin.png');
`;

export default () => {
  //图书的分类
  return (
    <>
      分类分类
      <CommonNavBar />
      <CategoryBlock />
      Top飙升榜
      <div>
        <Link to="/book/info">聪明人和傻子</Link>
      </div>
      <Footer />
    </>
  );
};
