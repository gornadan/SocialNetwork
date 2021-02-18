import React from "react";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";

// type AppPropsType = {
//     store: Store
//
// }
const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path="/messages" render={() => <DialogsContainer   />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>

        </div>
    )
}

export default App;
