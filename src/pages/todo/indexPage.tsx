import {Outlet} from "react-router";

function TodoIndexPage() {
    return (
        <div className="w-full h-full">
            <div className="text-2xl font-extrabold">
                Todo Index Page
            </div>
            <Outlet/>
        </div>
    );
}

export default TodoIndexPage;
