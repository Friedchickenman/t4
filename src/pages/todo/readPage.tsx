import { useParams } from "react-router-dom";

function ReadPage() {
    const { tno } = useParams();

    return (
        <div className={'mt-3 p-3 bg-orange-200 w-full h-full'}>
            <div>Todo Read Page {tno}</div>
        </div>
    );
}

export default ReadPage;
