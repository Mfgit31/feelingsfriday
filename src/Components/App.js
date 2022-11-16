import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import '../App.css';
import StudentPage from './StudentPage';
import StudentHeader from './StudentHeader';
import NavBar from "./NavBar";


function App() {


  return (
    <>
      <Switch>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <h1><StudentHeader /></h1>
              <h2>Feelings Friday</h2>
              <NavBar />
            </header>
          </div>
        </Route>

        <Route path="/father">
        <StudentPage />
        </Route>



      </Switch>

    </>

  );
}

export default App;
