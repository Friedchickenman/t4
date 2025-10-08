import ListPage from "./listPage";
import AddPage from "./addPage";

function TodoIndexPage() {
    return (
        <div className="w-full h-full p-4">
            <div className="text-2xl font-extrabold mb-4">
                Todo Page
            </div>
            <div className="flex w-full">
                <div className="w-1/2 pr-2">
                    <ListPage />
                </div>
                <div className="w-1/2 pl-2">
                    <AddPage />
                </div>
            </div>
        </div>
    );
}

export default TodoIndexPage;
