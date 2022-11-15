import React from 'react';
import Student from './Student';


function StudentList( { studentData } ) {
    const renderStudents = studentData.map( studentObj => {
        
    return( 
    <Student key= {studentObj.id} student={studentObj}/> )
    })

    return( 
        <div>
        {renderStudents}
        </div>
    )

}







export default StudentList; 