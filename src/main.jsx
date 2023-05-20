import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Blog from './pages/Blog.jsx';
// import ErrorPage from './components/error page/ErrorPage.jsx';
import Register from './components/login & signup/Register.jsx';
import Login from './components/login & signup/Login.jsx';
import Home from './components/home page/Home.jsx';
import AuthProviders from './providers/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
