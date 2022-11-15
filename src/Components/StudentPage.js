import React, { useEffect, useState } from 'react'
//import StudentSearch from './StudentSearch'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

function StudentPage(  ){





    const [ studentData, setStudentData ] = useState( [ ] )

    // const [ searchStudents, setSearchStudents ] = useState( "" )
    
    const studentUrl = "http://localhost:3000/students"

    
    // const searchStudents = students.filter( studentObj => {})
    useEffect( () => {
    fetch( studentUrl )
        .then( r => r.json () )
        .then( data => setStudentData (data) )
       


    } , [] )

    return(
        <div>
            {/* <StudentSearch /> */}
            <StudentForm />
            <StudentList studentData={ studentData } />
        </div>
    )
}

export default StudentPage;
