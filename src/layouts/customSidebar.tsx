import { NavLink } from "react-router-dom"; // (상단에 import 구문이 있을 것으로 추정됩니다)

type SidebarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const CustomSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {

    return (
        <aside
            className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform lg:translate-x-0 lg:relative lg:w-64 p-4`}
        >
            <button className="lg:hidden mb-4" onClick={toggleSidebar}>
                x
            </button>
            <nav>
                <ul>
                    <li className="py-2">
                        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "white" })}>
                            Main
                        </NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                            About
                        </NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="/todo" className={({ isActive }) => (isActive ? "active-link" : "")}>
                            Todo
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default CustomSidebar;