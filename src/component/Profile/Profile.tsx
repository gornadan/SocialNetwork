import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileType} from "../../redux/profileReducer";
import MyPostsContainer from "./Myposts/MyPostsContainer";


type ProfilePropsType = {
    profile: ProfileType
    // posts: Array<PostsType>
    // newPostText: string
}


const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        {/*<MyPosts newPostText={props.profilePage.newPostText}*/}
        {/*posts={props.profilePage.posts}*/}
        {/*dispatch={props.dispatch}*/}

        {/*/>*/}
        <MyPostsContainer/>

    </div>


}

export default Profile;