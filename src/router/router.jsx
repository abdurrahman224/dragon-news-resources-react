import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategorieNews from '../components/pages/CategorieNews';
import AuthLayout from '../layouts/AuthLayout';
import AuthLogin from '../components/pages/AuthLogin';
import AuthRegister from '../components/pages/AuthRegister';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>,
      },

      {
        path: '/category/:id',
        element: <CategorieNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/news',
    element: <p>News</p>,
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children:[

    {
path: "/auth/login",
element:<AuthLogin></AuthLogin>
    },
       {
path: "/auth/register",
element:<AuthRegister></AuthRegister>
    },
    



    ]
  },
  {
    path: '*',
    element: <h2>Error</h2>,
  },
]);
export default router;
