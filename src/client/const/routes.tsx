import BookDetail from '../views/BookDetail';
import BookCategory from '../views/BookCategory';
import BookInfo from '../views/BookInfo';
import Home from '../views/Home';
import Login from '../views/Login';
import type { RouteObject } from 'react-router-dom';
import ErrorBoudary from '../errorHandler/ErrorBoudary';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  { path: '/book/info', element: <BookInfo /> },
  { path: '/book/detail', element: <BookDetail /> },
  { path: '/category', element: <BookCategory /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <ErrorBoudary /> }
];

export default routes;
