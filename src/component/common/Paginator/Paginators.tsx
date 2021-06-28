import React, {useState} from "react";
import classes from "../../Users/Users.module.css";

export type PaginatorType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanged: (page: number) => void,
    currentPage: number,
    portionSize?: number
}



let Paginator: React.FC<PaginatorType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 15 } ) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageSize = portionNumber * portionSize
    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageSize)
            .map(p => {
            return <span
                key={p}
                onClick={() => {
                   onPageChanged(p)
                }}
                className={p === currentPage ? classes.selectedPage : ""}>{p}</span>
        })}
        {portionCount > portionNumber &&
        <button onClick={
            () => {
                setPortionNumber(portionNumber + 1)
            }
        }>NEXT</button>}
    </div>
}

export default Paginator;