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
         {/* <Switch>
            <Route> */}
                <button onClick= {goHome} >Home</button>
                <button onClick= {goForm} >Add a Student</button>
                <button onClick= {goSearch} >Student Search</button>
            {/* </Route>
         </Switch> */}
        </nav>
    );
}

export default NavBar;