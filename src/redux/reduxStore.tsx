import React from 'react';
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {InitialStateTypeProfile, profileReducer} from "./profileReducer";
import {dialogsReducer, InitialStateTypeDialogs} from "./dialogsReducer";
import {InitialStateTypeSidebar, sidebarReducer} from "./sidebarReducer";
import {InitialStateTypeUsers, usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";


type ReducersType = {
    profilePage: InitialStateTypeProfile,
    dialogsPage: InitialStateTypeDialogs,
    sidebarPage: InitialStateTypeSidebar,
    usersPage: InitialStateTypeUsers
}

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store: Store  = createStore(reducers, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof reducers>

export default store;