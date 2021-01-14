import React from 'react';

import {AddPostAC, PostsType, ProfileActionsTypes, UpdateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import {AppStateType} from "../../../redux/reduxStore";


// type PostsType = {
//     id: number
//     likeCount: number
//     message: string
// }

// type MyPostsPropsType = {
//      // store: Store
//     // posts: Array<PostsType>
//     // newPostText: string
//     // dispatch: (action: ProfileActionsTypes) => void
//     // addPost: () => void
//     // updateNewPostText: (text: string) => void
// }


// const MyPostsContainer = (props: MyPostsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//
//                     let state = store.getState()
//                     let addPost = () => {
//                         store.dispatch(AddPostAC())
//                     }
//
//                     let onPostChange = (text: string) => {
//                         let action = UpdateNewPostTextAC(text)
//                         store.dispatch(action)
//                     }
//
//                     return (
//                         <MyPosts updateNewPostText={onPostChange}
//                                  addPost={addPost}
//                                  posts={state.profilePage.posts}
//                                  newPostText={state.profilePage.newPostText}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

 type MapDispatchToPropsType = {
     addPost: () => void
     updateNewPostText: (text: string) => void

 }

let mapStateToProps = (state: AppStateType ): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

        addPost: () => {
            dispatch(AddPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}
// const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, Store>(mapStateToProps, mapDispatchToProps)(MyPosts);
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;