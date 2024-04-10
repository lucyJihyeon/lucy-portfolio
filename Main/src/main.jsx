import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skill from './components/Skill';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      // landing page: about
      {
        index: true,
        element: <About />,
      },
      {
        // proejcts
        path: 'projects',
        element: <Portfolio />,
      },
      {
        // contact
        path: 'contact',
        element: <Contact />,
      },
      {
        // resume
        path: 'resume',
        element: <Resume />,
      },
      {
        // skills
        path: 'skills',
        element: <Skill />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
