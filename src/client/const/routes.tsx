import BookDetail from '../views/BookDetail';
import BookCategory from '../views/BookCategory';
import BookInfo from '../views/BookInfo';
import Home from '../views/Home';
import Login from '../views/Login';
import type { RouteObject } from 'react-router-dom';
import ErrorBoudary from '../errorHandler/ErrorBoudary';
import axios from '../request';
import type { IndexCategory } from '../types';
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      let res = null;
      try {
        res = await axios.get<ResType<IndexCategory>>('/v1/index');
      } catch (e: any) {
      } finally {
      }
      return res?.data.data || {};
    }
  },
  { path: '/book/info', element: <BookInfo /> },
  { path: '/book/detail', element: <BookDetail /> },
  { path: '/category', element: <BookCategory /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <ErrorBoudary /> }
];

export default routes;
