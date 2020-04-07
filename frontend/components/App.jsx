import React from "react";
import {Route} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import {AuthRoute} from "../util/route_util"
const app = () => (
    <div>
    <div>
        <h1>Bandcabin</h1>
        <GreetingContainer />
    </div>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default app;