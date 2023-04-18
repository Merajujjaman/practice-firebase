import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './firebase/Layout/MainLayout';
import Home from './Home/Home';
import Ragister from './Ragister/Ragister';
import Login from './Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/ragister',
        element:<Ragister></Ragister>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
