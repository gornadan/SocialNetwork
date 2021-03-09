import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profileReducer";
import Preloader from "../common/Preloader";
import { withRouter} from "react-router";
import {compose} from "redux";

type MapStateToPropsType =  {
    profile: ProfileType | null,
    isAuth: boolean,
    status: string,
    authorizedUserId: number | null
}

type ProfilePropsType = {
    profile:  ProfileType | null
    setUserProfile: (profile: ProfileType) => void
    userId: number
}

class ProfileContainer extends React.Component <any>{
    componentDidMount () {

         let userId = this.props.match.params.userId;
        if(!userId){
             userId = this.props.authorizedUserId
            if(!userId) {
                 this.props.history.push("/login")
            }
         }
         this.props.getUserProfile(userId);
        this.props.getStatus(userId)

    }

    render() {
            if (this.props.profile === null){
               return  <Preloader />
            } else {

            return <Profile   {...this.props}
                              profile={this.props.profile}
                              status={this.props.status}
                              updateStatus={this.props.updateStatus}
                               />}
    }
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id

    }
}


export default compose<React.ComponentType>(connect (mapStateToProps,
    {getUserProfile, getStatus, updateStatus}),
    withRouter)(ProfileContainer)

