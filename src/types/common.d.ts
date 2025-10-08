
// 타입 나중에 줄게
interface PageResponse<T> {
    dtoList: T[],
    end: number,
    next: boolean,
    prev: boolean,
    page: number,
    size: number,
    start: number,
    total: number
}