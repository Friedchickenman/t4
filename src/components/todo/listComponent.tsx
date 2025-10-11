import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {getTodoList} from "../../api/todoApi.tsx";
import PageComponent from "../common/pageComponent.tsx";


const initState:PageResponse<Todo> = {
    dtoList: [],
    total: 0,
    size: 0,
    end: 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}

function ListComponent() {

    const  [searchParams] = useSearchParams()

    const pageStr:string | null = searchParams.get("page")
    const page: number = !pageStr ? 1 : Number(pageStr)

    const sizeStr:string | null = searchParams.get("size")
    const size: number = !sizeStr ? 10 : Number(pageStr)

    const [serverData, setServerData] = useState(initState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
        getTodoList(page,size).then(data => {
            setServerData(data)
            setLoading(false)
        })
        }, 2000)

    }, [page,size])

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

            <LoadingComponent isLoading={loading}/>

            <div className="flex flex-wrap mx-auto justify-center p-6">
                List Component
            </div>

            <div>
                {serverData.dtoList.map(todo =>
                    <ul className="space-y-4">
                        <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <span className="font-bold text-blue-600">#1</span>
                                    </p>
                                    <h3 className="text-lg font-bold text-gray-800">Tailwind CSS는 정말 편리합니다.</h3> <p
                                    className="mt-1 text-sm text-gray-600">작성자: 홍길동</p></div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-xs text-gray-500">2025-10-09</p></div>
                            </div>
                        </li>

                        <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <span className="font-bold text-blue-600">#2</span>
                                    </p>
                                    <h3 className="text-lg font-bold text-gray-800">UI 컴포넌트 만들기</h3>
                                    <p className="mt-1 text-sm text-gray-600">작성자: 김철수</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-xs text-gray-500">2025-10-08</p>
                                </div>
                            </div>
                        </li>

                        <li className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        <span className="font-bold text-blue-600">#3</span>
                                    </p>
                                    <h3 className="text-lg font-bold text-gray-800">목록을 출력하는 방법</h3>
                                    <p className="mt-1 text-sm text-gray-600">작성자: 이영희</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-xs text-gray-500">2025-10-07</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                )}
            </div>

            <PageComponent serverData={serverData}></PageComponent>
        </div>
    );
}

export default ListComponent;