import React, { useState, useEffect } from "react"
import StudentPage from './StudentPage';
function StudentSearch( { studentData }) {

    const [ searchText, setSearchText ] = useState( "" )

    const studentUrl = "http://localhost:3000/students"

    const [ allStudents, setAllStudents ] = useState( [] )
  

    useEffect( () => {
        fetch( studentUrl )
          .then( r => r.json () )
          .then( data => setAllStudents(data) )
        
      } , [] )
    

    const filteredStudentsArray = allStudents.filter( 
          (eachStudentObj) => {
            return(
            

            eachStudentObj.name.toLowerCase().includes( searchText.toLowerCase() ) 
            
    )} 
      
    ) 
        console.log( filteredStudentsArray )

    return(
      <div className="searchbar">
        <label htmlFor="search">SEARCH : </label>
      
        <input

        type="text"
        id="search"
        placeholder="Type a name to search..."
        
        value={ searchText }
        onChange={ (se) => setSearchText( se.target.value ) }
      />
        <StudentPage studentData={filteredStudentsArray}/>
    </div>
    )
}

export default StudentSearch;
