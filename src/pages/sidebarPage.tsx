import React, { useState } from 'react';
import CustomSidebar from '../layouts/customSidebar';

const SidebarPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return <CustomSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />;
};

export default SidebarPage;
