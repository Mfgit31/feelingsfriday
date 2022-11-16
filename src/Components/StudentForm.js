// Insert funny joke here
import React, { useState } from "react"
const studentUrl = "http://localhost:3000/students"

// "id":1,
// "name":"Kimber",
// "image":"https://thumbs.dreamstime.com/b/profile-picture-perfect-social-media-other-web-use-profile-picture-125320955.jpg",
// "age": 28,
// "location":"Ohio, USA",
// "wins":"My new team",
// "loss":"Lack of sleep",
// "feeling": "Write your feelings here"  

function StudentForm({ studentData, setStudentData }  ){

    const [ newStudentObj, setNewStudentObj] = useState(
        {
            name: " ",
            image: " ",
            age: 0  ,
            location: " ",
            wins: " ",
            loss: " ",
            feeling: " "
        }
      )


    const handleSubmit = (se) => {
        // console.log("handle",se)
        se.preventDefault()
       
        // setTracksData( [...tracksData, newTrackObj])
        fetch( studentUrl, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( newStudentObj )
          
        })
        .then(r => r.json())
    
        .then(newObj => {
          setStudentData( [...studentData, newObj])
        })
        
      }






    // const handleSubmit = (e) => { 
    //         // let newFeeling = { 
    //         //  name: " ",
    //         //  image: " ",
    //         //  age: 0  ,
    //         //  location: " ",
    //         //  wins: " ",
    //         //  loss: " ",
    //         //  feeling: " "

    //     } 
    //     fetch( studentUrl , { 
    //         method: "POST", 
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify(newFeeling) 
    //     } )
    //         .then(r => r.json()) 
    //         .then(addStudent(newFeeling)) 
    //      }

   
    
    return(
        <div>
            <h3> Add a Student </h3>
            <form onSubmit={ handleSubmit }>
        <div>

          <input value={newStudentObj.name} type="text" name="name" placeholder="Name" 
          onChange={(e) => {setNewStudentObj( { ...newStudentObj , name: e.target.value} )}}/>

          <input value={newStudentObj.image} type="text" name="image" placeholder="image" 
          onChange={(e) => { setNewStudentObj({...newStudentObj, image: e.target.value})}}/>

          <input value={newStudentObj.age} type="number" name="age" placeholder="Age" 
          onChange={(e) => {setNewStudentObj({...newStudentObj, age: e.target.value})}}/>

          <input value={newStudentObj.location} type="text" name="location" placeholder="location" 
          onChange={(e) => {setNewStudentObj({...newStudentObj, location: e.target.value})}}/>

          <input value={newStudentObj.wins} type="text" name="wins" placeholder="wins" 
          onChange={(e) => { setNewStudentObj({...newStudentObj, wins: e.target.value})}}/>

          <input value={newStudentObj.loss} type="number" name="loss" placeholder="Age" 
          onChange={(e) => {setNewStudentObj({...newStudentObj, loss: e.target.value})}}/>

          <input value={newStudentObj.feeling} type="text" name="feeling" placeholder="location" 
          onChange={(e) => {setNewStudentObj({...newStudentObj, feeling: e.target.value})}}/>
       
       
       
        </div>
        <input className="" type="submit" value="Add a Student" />
      </form>

            
            

        </div>
    )
}

export default StudentForm;