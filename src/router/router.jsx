import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Home from '../components/Home/Home';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blog/Blog';
import AppliedJob from '../components/AppliedJob/AppliedJob';
import JobDetails from '../components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/applied',
        loader: () => fetch('../jobs.json'),
        element: <AppliedJob />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: 'job/:id',
        loader: () => fetch('../jobs.json'),
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
