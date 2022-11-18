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
          <h3>Share a Win and a LOSS. Then feel free to share some feelings or anything else you would like to with this community.   </h3>
          <NavBar />
        </header>
      <Switch>
        <Route exact path="/" component={StudentPage} />
        <Route exact path="/StudentForm" component={StudentForm} />
        <Route exact path="/StudentSearch" component={StudentSearch} />
      </Switch>
      </div>
      
    </>
 

  );
}

export default App;
