import React, { useState } from 'react';
import CustomSidebar from "./customSidebar.tsx"; // 이 파일이 있다고 가정합니다.

// 1. TypeScript로 데이터의 타입을 정의합니다.
interface User {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    status: 'Active' | 'Inactive' | 'Pending';
}

// 2. 샘플 데이터를 준비합니다.
const sampleUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Sam Green', email: 'sam.green@example.com', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Lisa Ray', email: 'lisa.ray@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Tom Brown', email: 'tom.brown@example.com', role: 'Viewer', status: 'Pending' },
];

// 3. MainContent 컴포넌트의 props 타입을 정의합니다.
type MainContentProps = {
    toggleSidebar: () => void;
};

// 🌟 해결: 컴포넌트 이름을 'MainContent'로 변경
const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
    const getStatusClass = (status: User['status']) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Inactive': return 'bg-red-100 text-red-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <main className="flex-1 p-4 sm:p-6 bg-gray-100">
            <header className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="md:hidden text-gray-500 mr-4" aria-label="Open menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-800">User List</h1>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm sm:text-base">
                    Add User
                </button>
            </header>

            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                {/* 데스크탑 테이블 */}
                <table className="min-w-full hidden md:table">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {sampleUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="py-4 px-6 whitespace-nowrap">{user.name}</td>
                            <td className="py-4 px-6 whitespace-nowrap">{user.email}</td>
                            <td className="py-4 px-6 whitespace-nowrap">{user.role}</td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(user.status)}`}>
                                        {user.status}
                                    </span>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                <a href="#" className="text-red-600 hover:text-red-900 ml-4">Delete</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* 모바일 카드 리스트 */}
                <div className="md:hidden">
                    {sampleUsers.map((user) => (
                        <div key={user.id} className="p-4 border-b border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-bold text-gray-900">{user.name}</p>
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(user.status)}`}>
                                    {user.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 break-all">{user.email}</p>
                            <p className="text-sm text-gray-500 mt-1">Role: {user.role}</p>
                            <div className="mt-3 text-right">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900 text-sm">Edit</a>
                                <a href="#" className="text-red-600 hover:text-red-900 ml-4 text-sm">Delete</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};


// 전체 레이아웃을 조합하는 메인 컴포넌트
export default function CustomLayout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen relative bg-gray-100">
            <CustomSidebar isOpen={isSidebarOpen} />
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    aria-hidden="true"
                ></div>
            )}
            <div className="flex-1 flex flex-col">
                {/* 🌟 해결: 변경된 'MainContent' 컴포넌트를 호출 */}
                <MainContent toggleSidebar={toggleSidebar} />
            </div>
        </div>
    );
}