import React from 'react';
import classes from './Posts.module.css'


type PostsPropsType = {
    message: string
    likeCount: number

}

const Posts: React.FC<PostsPropsType> = (props) => {

    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src="https://cdn21.img.ria.ru/images/152706/30/1527063075_0:0:1920:1080_600x0_80_0_0_1619231de06a6127896bcf26500c320d.jpg"
                    alt="ava"/>
                {props.message}
                <div>
                    <span>Like </span>{props.likeCount}
                </div>
            </div>
        </div>
    )

}

export default Posts;