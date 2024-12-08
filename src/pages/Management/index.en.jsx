import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

export default function Management() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-[calc(100vh-4rem)] p-8">
        <Outlet />
      </div>
    </div>
  );
}
