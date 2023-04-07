import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Main from './components/Layout/Main';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tShirt.json')
      },
      {
        path: '/review',
        element: <OrderReview></OrderReview>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  },
]);



// {
//   element: <Hero />,
//   path: "heroes/:heroId",
//   loader: async ({ params }) => {
//    return fetch(
//     `/fake/api/heroes/${___?____}`,
//    );
//   }





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
