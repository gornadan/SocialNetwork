import React from "react";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import { Route} from "react-router-dom";
import {Store} from "redux";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";

// type AppPropsType = {
//     store: Store
//
// }
const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/messages" render={() => <DialogsContainer   />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>

        </div>
    )
}

export default App;
