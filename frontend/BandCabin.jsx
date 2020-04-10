import React from "react";
import ReactDOM from "react-dom";
import { fetchUser } from "./actions/user_actions"
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id},
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else{
        store = configureStore();
    }
    
    //// testing
    window.getState = store.getState;
    // window.fetchAlbum = fetchAlbum;
    // window.fetchAlbums = fetchAlbums;
    // window.createAlbum = createAlbum;
    window.dispatch = store.dispatch;
    window.fetchUser = fetchUser;
    ///// testing

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});