import React, { useState } from 'react';
import Navbar from "../components/Navbar.tsx";
import CustomSidebar from "./customSidebar.tsx"; // CustomSidebar import 추가

type CustomLayoutProps = {
    children: React.ReactNode;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 사이드바 상태 관리

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <CustomSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* 사이드바 추가 */}
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default CustomLayout;
