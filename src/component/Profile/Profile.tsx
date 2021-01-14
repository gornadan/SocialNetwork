import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileActionsTypes} from "../../redux/profileReducer";
import {ProfilePageType} from "../../redux/state"
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {Store} from "redux";

type ProfilePropsType = {
     // store: Store
    // posts: Array<PostsType>

     // profilePage: ProfilePageType
     // dispatch: (action: ProfileActionsTypes) => void
}


const Profile  = () => {
    /*let posts = [
        {likeCount: 215, message: "Hi!!!"},
        {likeCount: 10, message: "Hello!!"},
        {likeCount: 15, message: "How are you&"},
        {likeCount: 43, message: "Good afternoon!!!"}
    ];*/
    return <div>
        <ProfileInfo />
        {/*<MyPosts newPostText={props.profilePage.newPostText}*/}
                 {/*posts={props.profilePage.posts}*/}
                 {/*dispatch={props.dispatch}*/}

        {/*/>*/}
        <MyPostsContainer    />

    </div>


}

export default Profile;