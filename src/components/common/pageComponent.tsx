

interface PageComponentProps<T> {

    serverData: PageResponse<T>
}

function PageComponent({serverData}: PageComponentProps<unknown>) {

    const {page,size,prev,next,start,end} = serverData

    const pageNumArr = Array.from({ length: end - start + 1 }, (_,i) => start + i);

    console.log(pageNumArr)

    return (
        <div>
            <div>이전</div>
            <div></div>
            <div>다음</div>
        </div>
    );
}

export default PageComponent;