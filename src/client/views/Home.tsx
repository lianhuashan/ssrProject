import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
const Home = () => {
  return (
    <div>
      <HomeNavBar />
      this is home
      <Counter />
      <Footer />
    </div>
  );
};
export default Home;
