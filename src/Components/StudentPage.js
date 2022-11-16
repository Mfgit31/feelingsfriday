import React, { useEffect, useState } from 'react'
//import StudentSearch from './StudentSearch'
// import StudentForm from './StudentForm'
import StudentList from './StudentList'

function StudentPage( props ){

    const [ studentData, setStudentData ] = useState( [ ] )

    const studentUrl = "http://localhost:3000/students"

        useEffect( () => {
            fetch( studentUrl )
            .then( r => r.json () )
            .then( dataFromTheFetch => {   
                
                if (props.studentData) {
                    console.log("Being rendered by search page" ) 
                    console.log(props.student)
                    setStudentData(props.studentData)
                } else { 
                    console.log("Being rendered by App") 
                    setStudentData(dataFromTheFetch)
            
                }
                    
            
            } )
        } , [ props.studentData ] )


    


   
    // const [students, setStudents] = useState([])


    

    // const addStudent= (newStudent) => { 
    //          setStudents([...students, newStudent])
    //     }

    
   

    

   

    return(
        <div>
            {/* <StudentForm addStudent={ addStudent } setStudentData={ setStudentData } studentData={ studentData } /> */}
           
            {/* <Search studentSearch={ studentSearch } setStudentSearch={ setStudentSearch } /> */}
           
            <StudentList studentData={ studentData }  />
        </div>
    )
}

export default StudentPage;
