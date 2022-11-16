import React from 'react';
import Student from './Student';


function StudentList( { studentData } ) {

  console.log(studentData)


    // const renderStudents = studentData.map( studentObj => {
        
    // return( 
        
    // <Student key= {studentObj.id} student={studentObj}/> )
    // })

    //return( 
        return (
            <ul className="cards">
              {
                studentData.map(studentObj => <Student 
                  key={studentObj.id}
                  student={studentObj}
                  />)
              }
            
            </ul>
    //     <div>
    //  {renderStudents}
    //     </div>
    )

}







export default StudentList; 