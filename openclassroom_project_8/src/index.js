import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Accueil from './pages/Accueil';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Project, { loader as projectLoader, } from './pages/Project/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "projects/:projectId",
        element: <Project />,
        loader: projectLoader,
      }
    ]

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
