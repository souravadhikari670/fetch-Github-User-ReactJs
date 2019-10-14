import React from 'react';
import Home from './Home'
import Profile from './Profile'
import { Switch, Route } from "react-router-dom";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/profile" component={Home} />
            <Route exact path="/profile/detail/:id" component={Profile} />
        </Switch>
    )
}