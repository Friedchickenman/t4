import { Link, Outlet } from "react-router-dom";

function TodoIndexPage() {
    return (
        <div className="w-full h-full p-4 flex flex-col">
            {/* 1. 제목 영역 */}
            <div className="text-2xl font-extrabold mb-4 flex-none">
                Todo Page
            </div>
            {/* 2. 페이지 이동 링크 */}
            <div className="flex w-full mb-4">
                <Link to={'list'} className="p-2 mr-2 text-lg font-medium text-center text-gray-500 rounded-lg hover:text-gray-900">
                    List
                </Link>
                <Link to={'add'} className="p-2 mr-2 text-lg font-medium text-center text-gray-500 rounded-lg hover:text-gray-900">
                    Add
                </Link>
            </div>
            {/* 3. 내용물이 표시될 영역(Outlet) */}
            <div className="flex-1 w-full bg-white rounded-lg shadow-md p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default TodoIndexPage;
