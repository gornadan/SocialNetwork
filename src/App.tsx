import React from "react";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./component/Dialogs/Dialogs";
import {RootStateType, StoreType} from "./redux/state";
import {Store} from "redux";
import DialogsContainer from "./component/Dialogs/DialogsContainer";

type AppPropsType = {
    store: Store

}
const App = (props: any) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/messages" render={() => <DialogsContainer   />}/>
            </div>

        </div>
    )
}

export default App;
