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
        name:"",
        image:"",
        age: 0 ,
        location:"",
        win:"",
        loss:"",
        feeling:""
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

   
    
    return(
        <div>
            <h3> Add a Student </h3>
            <form onSubmit={ handleSubmit }>
        <div>

          <input value={newStudentObj.name} type="text" name="name" placeholder="NAME" 
          onChange={(se) => {setNewStudentObj( { ...newStudentObj , name: se.target.value} )}}/>

          <input value={newStudentObj.image} type="text" name="image" placeholder="IMAGE" 
          onChange={(se) => { setNewStudentObj({...newStudentObj, image: se.target.value})}}/>

          <input value={newStudentObj.age} type="number" name="age" placeholder="AGE" 
          onChange={(se) => {setNewStudentObj({...newStudentObj, age: se.target.value})}}/>

          <input value={newStudentObj.location} type="text" name="location" placeholder="LOCATION" 
          onChange={(se) => {setNewStudentObj({...newStudentObj, location: se.target.value})}}/>

          <input value={newStudentObj.win} type="text" name="win" placeholder="WIN" 
          onChange={(se) => { setNewStudentObj({...newStudentObj, win: se.target.value})}}/>

          <input value={newStudentObj.loss} type="text" name="loss" placeholder="LOSS" 
          onChange={(se) => {setNewStudentObj({...newStudentObj, loss: se.target.value})}}/>

          <input value={newStudentObj.feeling} type="text" name="feeling" placeholder="FEELINGS" 
          onChange={(se) => {setNewStudentObj({...newStudentObj, feeling: se.target.value})}}/>
       
       
       
        </div>
        <input className="" type="submit" value="Add a Student" />
      </form>

            
            

        </div>
    )
}

export default StudentForm;