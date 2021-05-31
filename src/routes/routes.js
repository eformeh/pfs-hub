
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Landing from './../components/pages/landing/landing';
import Employers from './../components/pages/Employers/Employers';
import AboutUs from './../components/pages/aboutUs/AboutUs';
const Routes = () => {
    // const user = getUserFromLocalStorage();
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />

                </Route>
                <Route exact path="/Employers">
                    <Employers />

                </Route>
                <Route exact path="/AboutUs">
                    <AboutUs />

                </Route>


                {/* at this point i made to route path for login because i made two login components for my tywo different approach to creating a login page */}
                {/* i used a normal setstate and usestate  on the first component */}
                {/* <Route path='/login' component={} /> */}
                {/* while i used the libraries "Formik" and "EmailValidator" and it has een commented for reasons of running only one login components */}

                {/* <Route path="/login">
                    <Login /> 
                </Route> */}



            </Switch>

        </Router>
    )
}

export default Routes

