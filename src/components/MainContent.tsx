import React from 'react';

// 데이터 타입과 샘플 데이터 (실제로는 API로 받아옵니다)
interface User {
    id: number; name: string; email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    status: 'Active' | 'Inactive' | 'Pending';
}

const sampleUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Pending' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Bob Brown', email: 'bob.b@example.com', role: 'Viewer', status: 'Active' },
];

// MainContent가 필요로 하는 props 타입 정의
type MainContentProps = {
    toggleSidebar: () => void;
};

export const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
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
            {/* 헤더: 제목, 버튼 등 */}
            <header className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="md:hidden text-gray-500 mr-4" aria-label="Open menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-800">User List</h1>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add User
                </button>
            </header>

            {/* 본문: 데이터 테이블 */}
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {sampleUsers.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                    <div className="text-sm text-gray-500 ml-2">({user.email})</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(user.status)}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                <a href="#" className="text-red-600 hover:text-red-900 ml-4">Delete</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};