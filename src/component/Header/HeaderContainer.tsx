import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type MapStateToPropsType = {
    id: number| null
    email: string | null
    login: string |null
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({...state.auth})

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);