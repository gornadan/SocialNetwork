import React from "react";
import classes from "../../Users/Users.module.css";

export type PaginatorType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (page: number) => void,
    currentPage: number
}



let Paginator: React.FC<PaginatorType> = ({totalUsersCount, pageSize, currentPage, onPageChanged } ) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <span
                onClick={() => {
                   onPageChanged(p)
                }}
                className={p === currentPage ? classes.selectedPage : ""}>{p}</span>
        })}
    </div>
}

export default Paginator;