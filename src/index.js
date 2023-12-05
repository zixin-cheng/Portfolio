import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import WPPHouse from './ProjectPages/WPPHouse';
import LuckyTiger from './ProjectPages/LuckyTiger';
import DemoReel from './ProjectPages/2022DemoReel';
import TapType from './ProjectPages/TapType';
import InfoPage from './InfoPage';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Route, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'info-page',
    element: <InfoPage />,
  },
  {
    path: 'wpp-house',
    element: <WPPHouse />,
  },
  {
    path: 'lucky-tiger',
    element: <LuckyTiger />,
  },
  {
    path: '2022-demo-reel',
    element: <DemoReel />,
  },
  {
    path: 'taptype',
    element: <TapType />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
