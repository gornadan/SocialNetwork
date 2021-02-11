import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";


type MapStateToPropsType = {
    id: number
    email: null | string
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component <any> {
    componentDidMount () {
        this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:any): any => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);