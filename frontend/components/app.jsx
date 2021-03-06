import React from "react";
import {Route, link, Switch} from 'react-router-dom';
import {AuthRoute} from "../util/route_util"

import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import UserShowContainer from "./user_show/user_show_container"
import AlbumFormContainer from "./albums/album_form_container"
import AlbumShowContainer from "./albums/album_show_container"
import HomePageContainer from "./homepage/homepage_container"
import Footer from "./footer/footer"

const App = () => (
    <div>
        <GreetingContainer />

        <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path='/users/:userId' component={UserShowContainer}/>
        <Route path='/albums/new' component={AlbumFormContainer}/>
        <Route path='/albums/:albumId' component={AlbumShowContainer}/>
        </Switch>
        <Footer />
    </div>
);

export default App;