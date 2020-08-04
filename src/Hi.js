
import {Switch, Route} from"react-router-dom"
import React from "react"

import LandingPage from "./LandingPage"
import logOut from "./logOut"
function Hi(){

    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/logOut" exact component={logOut}/>
        </Switch>
    )

}

export default Hi