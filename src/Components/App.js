import React from 'react';
import { Switch, Route } from 'react-router-dom'
import '../App.css';
import StudentPage from './StudentPage';
import StudentHeader from './StudentHeader';
import NavBar from "./NavBar";
import StudentForm from './StudentForm';
import StudentSearch from './StudentSearch';


function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1><StudentHeader /></h1>
          <h2>Feelings Friday</h2>
          <NavBar />
        </header>
      </div>
    
    
      <Switch>
        <Route exact path="/" component={StudentPage} />
        <Route exact path="/StudentForm" component={StudentForm} />
        <Route exact path="/StudentSearch" component={StudentSearch} />
      </Switch>
      
    </>
 

  );
}

export default App;
