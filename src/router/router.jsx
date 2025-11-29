import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategorieNews from '../components/pages/CategorieNews';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Navigate></Navigate>,
      },

      {
        path: '/category/:id',
        element: <CategorieNews/>,
        loader: ({params}) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
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
