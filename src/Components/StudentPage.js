import React, { useEffect, useState } from 'react'
//import StudentSearch from './StudentSearch'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

function StudentPage( ){
   
    const [students, setStudents] = useState([])


    const [ studentData, setStudentData ] = useState( [ ] )

    const addStudent= (newStudent) => { 
             setStudents([...students, newStudent])
        }

    
    

    

    // const [ searchStudents, setSearchStudents ] = useState( "" )
    
    const studentUrl = "http://localhost:3000/students"
  
    
    // const searchStudents = students.filter( studentObj => {})
    useEffect( () => {
      fetch( studentUrl )
        .then( r => r.json () )
        .then( data => setStudentData(data) )
    } , [] )

    return(
        <div>
            <StudentForm addStudent={ addStudent } setStudentData={ setStudentData } studentData={ studentData } />
            <StudentList studentData={ studentData } />
        </div>
    )
}

export default StudentPage;
