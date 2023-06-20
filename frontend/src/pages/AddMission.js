import React from 'react'
import { useState } from 'react'

function AddMission() {

     const user_id = localStorage.getItem('user_id')

      // declaring state 
      const [isClicked, setIsClicked] = useState({
        name:"",
        description:"",
        start:"",
        end:"",
        user_id:user_id
    })
    // function that handles the change in the inputs
       const handleChange = (e) => {
        console.log(e.target.value)
        setIsClicked({
            // spread operator to copy the data then targtting the value
            ...isClicked,
            [e.target.name] : e.target.value,   
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // creates the post when the data is added it adds the data to the backend ie ..db.json
        fetch("http://127.0.0.1:3000/missions",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(isClicked),
            

        })
        .then(response => response.json())
        .then(data => console.log(data))
        // this makes the website to reload after data is passed and the button is clicked
        // window.location.reload() 

    }


  return (
    <div>
        <form  className='new_task' onSubmit={handleSubmit}>
            <label>Name</label> <br />
            <input type="text" placeholder='Name' name = "name" onChange={handleChange}/>
            <br />
            <label>Description</label> <br />
            <input type="text" placeholder='Description' name = "description" onChange={handleChange}/>
            <br />
            <label>Start-date</label><br />
            <input type="date" placeholder='Start' name = "start" onChange={handleChange}/>
            <br />
            <label>End-date</label><br />
            <input type="date" placeholder='End' name = "end" onChange={handleChange}/>
            <br />
            <button >Add Task</button>
        </form>
    </div>
  )

}

export default AddMission