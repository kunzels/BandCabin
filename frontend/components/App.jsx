import React from "react";
import {Route} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import {AuthRoute} from "../util/route_util"
import { Link } from 'react-router-dom'
const app = () => (
    <div>
        <div>
        <img src={window.logo} alt="icon"/>
        </div>
        <GreetingContainer />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default app;