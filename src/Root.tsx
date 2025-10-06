import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLayout from "./layouts/customLayout.tsx";

const Root: React.FC = () => {
    return (
        <CustomLayout>
            <Outlet />
        </CustomLayout>
    );
};

export default Root;