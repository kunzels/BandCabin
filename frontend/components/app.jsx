import React from "react";
import {Route, link, Switch} from 'react-router-dom';
import {AuthRoute} from "../util/route_util"

import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import HomePage from "./homepage/homepage"

const App = () => (
    <div>
        <GreetingContainer />

        <Switch>
        <Route exact path="/" component={HomePage} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;