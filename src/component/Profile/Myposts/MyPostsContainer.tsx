import React from 'react';

import {AddPostAC, PostsType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";



type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

 type MapDispatchToPropsType = {
     addPost: (newPostText: string) => void
     // updateNewPostText: (text: string) => void

 }

let mapStateToProps = (state: AppStateType ): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

        addPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText))
        },
        // updateNewPostText: (text: string) => {
        //     dispatch(UpdateNewPostTextAC(text))
        // }
    }
}
// const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, Store>(mapStateToProps, mapDispatchToProps)(MyPosts);
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;