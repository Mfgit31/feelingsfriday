import React, { useState, useEffect } from 'react'
import StudentSearch from './StudentSearch'
import StudentForm from './StudentForm'

function StudentPage(){

    return(
        <div>
            <StudentSearch />
            <StudentForm />
        </div>
    )
}

export default StudentPage;
