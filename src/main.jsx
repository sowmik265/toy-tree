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
import Register from './components/login & signin/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
