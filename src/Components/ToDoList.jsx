import { useState } from "react"

function ToDoList() {
  let [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]); // Initial tasks in the list

  let [newTask, setnewTask] = useState("");
  
     let handelInputChange = (event)  =>{

     }

     let AddTasks = () =>{

     }

     let DeleteTask = (index) =>{

     }

     let moveTaskup = (index) =>{
 
     }

     let moveTaskDowm = (index) =>{
 
     }
     
  return (
    <>
        <div className="to-do-list">
          <h1>To-Do-List</h1>
          <div><input 
          type="text"
        placeholder="Enter a task..." 
          value = {newTask} 
        onChange={handelInputChange}/>
        <button className="add-button" onClick={AddTasks}>Add</button>
          </div>
          <ol>
             {tasks.map((tasks,index)=>
                <li key={index}>
                  <span className="text">{tasks}</span>
                  <button className="delete-button" onClick={() => DeleteTask(index)}>Delete</button>
                </li>
             )}
          </ol>
        </div>
   
    </>
  )
}

export default ToDoList