import React, { useState } from 'react';
import CustomSidebar from './customSidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <CustomSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
