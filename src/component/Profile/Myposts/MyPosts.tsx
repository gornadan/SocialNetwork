import React from 'react';
import Posts from "./Post/Posts";
import classes from "./Myposts.module.css"
import { PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    // dispatch: (action: ProfileActionsTypes) => vo
    addPost: () => void
    updateNewPostText: (text: string) => void

}



const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    console.log(newPostElement);


    let addPost = () => {
             props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            console.log(text)
        }
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My Post</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button className={classes.buttonSave} onClick={addPost}>Add post</button>

                </div>
            </div>
            {postsElements}
        </div>)

}

export default MyPosts;