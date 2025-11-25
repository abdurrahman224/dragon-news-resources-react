import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Hello</h2>,
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
