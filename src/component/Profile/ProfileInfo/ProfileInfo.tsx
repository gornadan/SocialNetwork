import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    // status: string
}

const ProfileInfo = (props: ProfileInfoType) => {
    return <div>
        {/*<div>*/}
        {/*<img src='http://proklumbu.com/wp-content/uploads/2017/06/tomswallpapers.com-9250.jpg'/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*<img*/}
        {/*src='http://185504.selcdn.ru/static/mv-flowers.reshop.by/catalog/404/16942458315ec39932dd4b7_medium.jpg'/>*/}
        {/*</div>*/}
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {/*<div >{props.profile.status}</div>*/}
            {/*ava + description</div>*/}
        </div>


    </div>


}

export default ProfileInfo;