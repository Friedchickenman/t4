import { useParams } from "react-router-dom";
import ReadComponent from "../../components/todo/readComponent.tsx";

function ReadPage() {
    const { tno } = useParams();

    return (
        <div className={'mt-3 p-3 bg-orange-200 w-full h-full'}>
            <div>Todo Read Page {tno}</div>
            <ReadComponent></ReadComponent>
        </div>
    );
}

export default ReadPage;
