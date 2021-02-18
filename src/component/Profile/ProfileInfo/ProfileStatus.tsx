import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";


type ProfileStatusType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}

class ProfileStatus extends React.Component<ProfileStatusType> {

     state = {
         editMode: false,
         status: this.props.status
     };
     activateEditMode  =  () =>  {
         this.setState({
             editMode: true
         })

     };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate (prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status )
        this.setState({
            status: this.props.status
        })
    }
    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            </div>}
        </div>
    }
}

export default ProfileStatus;