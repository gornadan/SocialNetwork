import React, { FC } from "react";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import s from "../../common/FormsControl/FormsControl.module.css";


type ProfileDataFormType = {
    handleSubmit: () => void
    profile: any
    error: any
}

const ProfileDataForm: FC<ProfileDataFormType> = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
       <div><button >Save</button></div>
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input )}
        </div>

        <div>
            <b>Looking for a job</b>:
            {createField("", "lookingForAJob", [], Input, {type: "checkBox"} )}
        </div>

        <div>
             <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>About me</b>:
            {createField("aboutMe", "aboutMe", [], Textarea)}
         </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(k => {

            return <div key={k} className='contact'>
                <b>{k}: {createField("Contacts", 'contacts.' + k, [], Input)}</b>
            </div>})}
        </div>
     </form>
}
//@ts-ignore
const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm