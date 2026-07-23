import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import WPPHouse from './ProjectPages/WPPHouse';
import LuckyTiger from './ProjectPages/LuckyTiger';
import MotionReel from './ProjectPages/MotionReel';
import TapType from './ProjectPages/TapType';
import InfoPage from './InfoPage';
import Playground from './Playground';
import ProjectArchive from './ArchivePage';
import WorldCheeseAward from './ProjectPages/WorldCheeseAward';
import HeartsAndBones from './ProjectPages/HeartsAndBones';
import LashInBloom from './ProjectPages/LashInBloom';
import K5 from './ProjectPages/K5';
import SignatureSpectrum from './ProjectPages/SignatureSpectrum';
import LincolnCenter from './ProjectPages/LincolnCenter';
import Colaj from './ProjectPages/Colaj';
import Quilt from './ProjectPages/Quilt';
import C7 from './ProjectPages/C7';
import Arium from './ProjectPages/Arium';

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
    path: 'playground',
    element: <Playground />,
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
    path: 'motion-reel',
    element: <MotionReel />,
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
  {
    path: 'quilt',
    element: <Quilt />,
  },
  {
    path: 'c7',
    element: <C7 />,
  },
  {
    path: 'arium',
    element: <Arium />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
