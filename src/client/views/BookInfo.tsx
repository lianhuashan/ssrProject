import React from 'react';
import { Link } from 'react-router-dom';
import CommonNavBar from '../components/CommonNavBar';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <CommonNavBar />
      this is book info
      <div>
        <Link to="/book/detail">聪明人和傻子详情</Link>
      </div>
      <Footer />
    </>
  );
};
