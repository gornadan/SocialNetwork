import React from 'react';
import Posts from "./Post/Posts";
import classes from "./Myposts.module.css"
import {PostsType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps,  reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ProfileActionsTypes) => vo
    addPost: (newPostText: string) => void
    // updateNewPostText: (text: string) => void

}

type MyPostFormType = {
    newPostText: string
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount} key={p.id}/>);

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    // console.log(newPostElement);


    // let addPost = () => {
    //     props.addPost()
    // }

    // let onPostChange = () => {
    //     if (newPostElement.current) {
    //         let text = newPostElement.current.value
    //         props.updateNewPostText(text)
    //         console.log(text)
    //     }
    // };
    let addPostText = (text: MyPostFormType) => {
        props.addPost(text.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My Post</h3>
            <MyPostFormRedux onSubmit={addPostText}/>
            </div>
            {postsElements}
        </div>)

}



const MyPostForm = (props: InjectedFormProps<MyPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"}
                       name={"newPostText"}
                       placeholder={"Enter your post"}/>
            </div>
            <div>
                <button className={classes.buttonSave}>Add post</button>

            </div>
        </form>
    )
}
const MyPostFormRedux = reduxForm<MyPostFormType>({form: "addPostText"})(MyPostForm)

export default MyPosts;