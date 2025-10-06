import React from 'react';
import CustomSidebar from "./customSidebar.tsx";

// 🌟 'MainPage'로부터 필요한 모든 것을 전달받아요.
type CustomLayoutProps = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    children: React.ReactNode;
};

// 🌟 이제 이 컴포넌트는 상태(useState)가 없어서 아주 깔끔해졌어요.
const CustomLayout: React.FC<CustomLayoutProps> = ({ isSidebarOpen, toggleSidebar, children }) => {
    return (
        <div className="flex min-h-screen relative bg-gray-100">
            <CustomSidebar isOpen={isSidebarOpen} />
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar} // 전달받은 함수 사용
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    aria-hidden="true"
                ></div>
            )}
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}

export default CustomLayout;