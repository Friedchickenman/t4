import React from 'react';
import Navbar from "../components/Navbar.tsx";

type CustomLayoutProps = {
    children: React.ReactNode;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}

export default CustomLayout;