import React, {Suspense} from "react";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/reduxStore";
import Preloader from "./component/common/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'));


type AppComponentType = {
    initialized: boolean
    initializeApp: () => void
};

class App extends React.Component<AppComponentType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path="/messages" render={withSuspense(DialogsContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});
export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}), withRouter)(App)
