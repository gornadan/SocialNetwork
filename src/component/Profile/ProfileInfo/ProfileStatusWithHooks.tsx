import React, {useEffect, useState} from 'react';



type ProfileStatusType = {
    //profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {

            setStatus(props.status)
    }, [props.status])

    let  activateEditMode  =  () => {
        setEditMode(true)
    };

    let deactivateEditMode = () => {
       setEditMode(false)
        props.updateStatus(status)
    };

    let onStatusChange = (e:React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    return <div>
        {!editMode &&
        <div>
           <b>Status</b>: <span onDoubleClick={activateEditMode}>{status || "---------"}</span>
        </div>}
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true}
                 onBlur={deactivateEditMode} value={status} />
        </div>}
    </div>
}


export default ProfileStatusWithHooks;