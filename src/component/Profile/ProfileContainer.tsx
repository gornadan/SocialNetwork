import React, {ReactNode} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profileReducer";
import Preloader from "../common/Preloader";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedidrect";
import {compose} from "redux";
import {string} from "prop-types";




type MapStateToPropsType =  {
    profile: ProfileType | null,
    isAuth: boolean,
    status: string,
    authorizedUserId: number | null
    // posts: Array<PostsType>
    // newPostText: string
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

// let AuthRedirectComponent = (props: any) => {
//     if(!props.isAuth ) return <Redirect to={'/login'}/>
//     return <ProfileContainer {...props}/>
// }

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id

    }
}

// let withUrlDataContainerComponent =  withRouter(ProfileContainer);
// export default withAuthRedirect(connect (mapStateToProps, {
//     getUserProfile})(withUrlDataContainerComponent));
export default compose<React.ComponentType>(connect (mapStateToProps,
    {getUserProfile, getStatus, updateStatus}),
    withRouter)(ProfileContainer)

// export default compose<React.ComponentType>(connect (mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)