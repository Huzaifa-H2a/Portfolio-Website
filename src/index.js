import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import Project1 from './components/pages/Project1'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Dashboard from './components/Admin/Dashboard'
import Resume from './components/pages/Resume';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/project1",
    element: <Project1 />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/signup",
    element: <Signup />,
  },{
    path: "/dashboard",
    element: <Dashboard />,
  },{
    path: "/resume",
    element: <Resume />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
