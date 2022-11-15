import React from 'react';
import '../App.css';
import StudentPage from './StudentPage';
import StudentHeader from './StudentHeader';
//import NavBar from "./NavBar";
//import { Switch, Route, useState } from "react-router-dom";


function App() {

  //const [page, setPage] = useState("/")
  return (
    <div className="App">
      <header className="App-header">
      <h1><StudentHeader/></h1>
      <h2>Feelings Friday</h2>
      {/* <NavBar onChangePage={setPage} />
      <Switch>
         
          <Route exact path="/">
              <StudentPage />
          </Route>
          <Route path="*">
              <h1>404 not found</h1>
          </Route>
      </Switch> */}
      </header>

      <StudentPage />
      
    </div>
  );
}

export default App;
