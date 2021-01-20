import React, {ReactNode} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {PostsType, ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import Preloader from "../common/Preloader";


type MapStateToPropsType =  {
    profile: ProfileType | null
       // posts: Array<PostsType>
    // newPostText: string
}

type ProfilePropsType = {
    // posts:  Array<PostsType>
    // newPostText: string
    profile:  ProfileType | null
    setUserProfile: (profile: ProfileType) => void



}


class ProfileContainer extends React.Component <ProfilePropsType>{
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/22`)
            .then(response => {

                this.props.setUserProfile(response.data)
            })
    }

    render() {
debugger;
            if (this.props.profile === null){
               return  <Preloader />
            } else {

            return <Profile   {...this.props}
                              profile={this.props.profile}
                               />}



    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
         // posts: state.profilePage.posts,
         // newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

export default connect (mapStateToProps, {
    setUserProfile: setUserProfileAC})(ProfileContainer);