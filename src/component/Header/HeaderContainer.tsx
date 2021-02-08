import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ActionsTypes, setAuthUserData} from "../../redux/authReducer";


type MapStateToPropsType = {
    id: number
    email: null | string
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component <any> {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:any): any => ({
    ...state.auth
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);