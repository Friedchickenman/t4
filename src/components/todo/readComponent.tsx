import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTodo} from "../../api/todoApi.tsx";

const initState:Todo = {
    tno:0,
    title:'',
    writer:'',
    regDate:'',
    modDate:''
}

function ReadComponent() {

    const [todo, setTodo] = useState<Todo>(initState)

    const params = useParams(); //useParams에서 가져옴

    const tnoStr = params.tno

    useEffect(() => {

        const tno = Number(tnoStr);

        console.log("tno:" , tno)

        getTodo(tno).then(data => {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            setTodo(data)
        })

    }, [tnoStr]);

    return (
        <div>Todo Read Component</div>
    );
}

export default ReadComponent;