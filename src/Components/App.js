import React, {useState, useEffect} from 'react';
import '../App.css';
import StudentPage from './StudentPage'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Feelings Friday</h1>
      </header>
      <StudentPage />
    </div>
  );
}

export default App;
