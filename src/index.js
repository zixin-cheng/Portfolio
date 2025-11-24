import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Route, Link } from 'react-router-dom';
import WPPHouse from './ProjectPages/WPPHouse';
import LuckyTiger from './ProjectPages/LuckyTiger';
import DemoReel from './ProjectPages/2022DemoReel';
import TapType from './ProjectPages/TapType';
import InfoPage from './InfoPage';
import ProjectArchive from './ArchivePage';
import WorldCheeseAward from './ProjectPages/WorldCheeseAward';
import HeartsAndBones from './ProjectPages/HeartsAndBones';
import LashInBloom from './ProjectPages/LashInBloom';
import K5 from './ProjectPages/K5';
import SignatureSpectrum from './ProjectPages/SignatureSpectrum';
import LincolnCenter from './ProjectPages/LincolnCenter';
import Colaj from './ProjectPages/Colaj';

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
    path: 'archive',
    element: <ProjectArchive />,
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
  {
    path: 'world-cheese-award',
    element: <WorldCheeseAward />,
  },
  {
    path: 'hearts-and-bones',
    element: <HeartsAndBones />,
  },
  {
    path: 'lash-in-bloom',
    element: <LashInBloom />,
  },
  {
    path: 'k5',
    element: <K5 />,
  },
  {
    path: 'signature-spectrum',
    element: <SignatureSpectrum />,
  },
  {
    path: 'lincoln-center',
    element: <LincolnCenter />,
  },
  {
    path: 'colaj',
    element: <Colaj />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
