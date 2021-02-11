import React, {ReactNode} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router";
import {usersAPI} from "../../api/api";


type MapStateToPropsType =  {
    profile: ProfileType | null
       // posts: Array<PostsType>
    // newPostText: string
}

type ProfilePropsType = {
    profile:  ProfileType | null
    setUserProfile: (profile: ProfileType) => void
}


class ProfileContainer extends React.Component <any>{
    componentDidMount () {

         let userId = this.props.match.params.userId;
        if(!userId){
             userId = 22
         }
         this.props.getUserProfile(userId)

    }

    render() {
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

        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent =  withRouter(ProfileContainer);
export default connect (mapStateToProps, {
    getUserProfile})(withUrlDataContainerComponent);