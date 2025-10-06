// 3. 컴포넌트의 props 타입을 정의합니다.
type SidebarProps = {
    isOpen: boolean;
};

const CustomSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <aside
            className={`bg-gray-800 text-white w-64 min-h-screen p-4 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 md:relative fixed md:inset-y-0 left-0 transition-transform duration-300 ease-in-out z-30`}
        >
            <h2 className="text-2xl font-bold mb-5">Admin Panel</h2>
            <nav>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 bg-gray-700">Dashboard</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Users</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Settings</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Reports</a>
            </nav>
        </aside>
    );
};

export default CustomSidebar