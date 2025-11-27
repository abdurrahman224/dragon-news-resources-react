import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Header from '../components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>
  },
  {
    path: '/news',
    element: <p>News</p>,
  },
  {
    path: '/auth',
    element: <h2>Login</h2>,
  },
  {
    path: '*',
    element: <h2>Error</h2>,
  },
]);
export default router;
