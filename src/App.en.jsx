import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="nft-market" element={<NFTMarket />} />
          <Route path="management" element={<Management />}>
            <Route path="user" element={<UserManagement />} />
            <Route path="device" element={<DeviceManagement />} />
            <Route path="advertiser" element={<AdvertiserManagement />} />
            <Route path="developer" element={<DeveloperManagement />} />
            <Route path="reviewer" element={<ReviewerManagement />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
