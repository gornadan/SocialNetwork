import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/images.png"
import Preloader from "../../common/Preloader";
import ProfileDataForm from "./ProfileDataForm";


type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: File) => void
    // status: string
}

const ProfileInfo = (props: any) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return <div>

        <div className={classes.descriptionBlock}>
            <img alt={"img"} src={props.profile.photos.large || userPhoto} className={classes.mainPhoto}/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            {editMode
                //@ts-ignore
                ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                :
                <ProfileData isOwner={props.isOwner} goToEditMode={() => (setEditMode(true))} profile={props.profile}/>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}

const ProfileData = ({
                         profile,
                         isOwner,
                         goToEditMode
                     }: { profile: any, isOwner: boolean, goToEditMode: () => void }) => {

    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>

        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>

    </div>
}
const Contact = ({contactTitle, contactValue}: { contactTitle: string, contactValue: string }) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;