import React from 'react';
import {AnyAction, CombinedState, combineReducers, createStore, Store} from "redux";
import {InitialStateTypeProfile, profileReducer} from "./profileReducer";
import {dialogsReducer, InitialStateTypeDialogs} from "./dialogsReducer";
import {InitialStateTypeSidebar, sidebarReducer} from "./sidebarReducer";
import {InitialStateTypeUsers, usersReducer} from "./usersReducer";

type ReducersType = {
    profilePage: InitialStateTypeProfile,
    dialogsPage: InitialStateTypeDialogs,
    sidebarPage: InitialStateTypeSidebar,
    usersPage: InitialStateTypeUsers
}



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

let store: Store  = createStore(reducers);

export type AppStateType = ReturnType<typeof reducers>

export default store;