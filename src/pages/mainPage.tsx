import React, { useState } from 'react';
import CustomLayout from "../layouts/customLayout.tsx";
import { MainContent } from "../components/MainContent.tsx";

function MainPage() {
    // 🌟 '집'이 '문이 열렸는지'를 직접 기억해요!
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // 🌟 '집'이 '문을 여닫는 방법'을 알고 있어요!
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        // 🌟 '방'에게 문 상태와 리모컨 기능을 모두 알려줘요.
        <CustomLayout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            {/* 🌟 '책상'에게도 똑같은 리모컨 기능을 줘요! */}
            <MainContent toggleSidebar={toggleSidebar} />
        </CustomLayout>
    );
}

export default MainPage;