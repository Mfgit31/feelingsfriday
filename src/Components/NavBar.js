import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom"

function NavBar() {
    
   const history = useHistory()
   const goHome = () => {
    history.push('/')
   }
   const goSearch = () => {
    history.push('/StudentSearch')
   }
   const goForm = () => {
    history.push('/StudentForm')
   }
    
    return (
        <nav>
            <div className="nav_buttons">
         {/* <Switch>
            <Route> */}
                <button className="home_button" onClick= {goHome} >Home</button>
                <button className="home_button" onClick= {goForm} >Add a Student</button>
                <button className="home_button" onClick= {goSearch} >Student Search</button>
            {/* </Route>
         </Switch> */}
         </div>
        </nav>
    );
}

export default NavBar;