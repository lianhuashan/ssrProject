import React from 'react';
import { useLoaderData, useRoutes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeNavBar from '../components/HomeNavBar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
const Home = () => {
  const userList: { username: string; id: number }[] = useLoaderData();
  console.log('>>>userList', userList);
  return (
    <div>
      <HomeNavBar />
      this is home
      <ul>
        {userList?.map((item, key) => (
          <li key={key}>
            {item.username}-{item.id}
          </li>
        ))}
      </ul>
      <Counter />
      <Footer />
    </div>
  );
};
export default Home;
