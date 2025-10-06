import CustomLayout from "../layouts/customLayout.tsx";
import {useState} from "react";

function AboutPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <CustomLayout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>

            <h2 className="text-lg font-semibold">About Page</h2>

        </CustomLayout>
    );
}

export default AboutPage;