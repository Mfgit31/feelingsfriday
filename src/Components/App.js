import React from 'react';
import '../App.css';
import StudentPage from './StudentPage';
import StudentHeader from './StudentHeader';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1><StudentHeader/></h1>
      <h2>Feelings Friday</h2>
      </header>
    
      <StudentPage />
      
    </div>
  );
}

export default App;
