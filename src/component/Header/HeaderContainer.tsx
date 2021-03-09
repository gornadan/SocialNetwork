import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type MapStateToPropsType = {
    id: number| null
    email: string | null
    login: string |null
    isAuth: boolean
}

class HeaderContainer extends React.Component <any> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({...state.auth})

export default connect(mapStateToProps, {logout}) (HeaderContainer);