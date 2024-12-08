import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/index.en';
import Home from './pages/Home/index.en';
import Dashboard from './pages/Dashboard/index.en';
import Management from './pages/Management/index.en';
import NFTMarket from './pages/NFTMarket/index.en';
import UserManagement from './pages/Management/User/index.en';
import DeviceManagement from './pages/Management/Device/index.en';
import AdvertiserManagement from './pages/Management/Advertiser/index.en';
import DeveloperManagement from './pages/Management/Developer/index.en';
import ReviewerManagement from './pages/Management/Reviewer/index.en';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'nft-market',
        element: <NFTMarket />
      },
      {
        path: 'management',
        element: <Management />,
        children: [
          {
            path: 'user',
            element: <UserManagement />
          },
          {
            path: 'device',
            element: <DeviceManagement />
          },
          {
            path: 'advertiser',
            element: <AdvertiserManagement />
          },
          {
            path: 'developer',
            element: <DeveloperManagement />
          },
          {
            path: 'reviewer',
            element: <ReviewerManagement />
          }
        ]
      }
    ]
  }
]);
