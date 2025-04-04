import { useState } from "react"

function ToDoList() {
  let [tasks, setTasks] = useState([]);

  let [task, setTask] = useState("");
  
     let handelInputChange = (event)  =>{
      setTask(event.target.value);
     }

     let AddTasks = () =>{
        if(task === ""){
            alert("Please enter a task");
        }
        if(tasks.includes(newTask)){
            alert("Task already exists");           
        }
        setTasks((tasks) =>[...tasks, newTask]);
        setnewTask("");
     }

     let DeleteTask = (index) =>{
       const updatedTasks = tasks.filter((_, i) => i !== index);
       setTasks(updatedTasks);
     }

     let moveTaskUp = (index) =>{
        if(index > 0){
         const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]];
         setTasks(updatedTasks);
        }
     }

     let moveTaskDown = (index) =>{
      if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
       }
     }
     
  return (
    <>
        <div className="to-do-list">
          <h1>To-Do-List</h1>
          <div>
            <input 
             type="text"
             placeholder="Enter a task..." 
             value = {newTask} 
             onChange={handelInputChange} />
            <button className="add-button" onClick={AddTasks}>Add</button>
          </div>
          <ol>
             {tasks.map((tasks,index)=>
                <li key={index}>
                  <span className="text">{tasks}</span>
                  <button className="delete-button" onClick={() => DeleteTask(index)}>Delete</button>
                  <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                  <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                </li>
             )}
          </ol>
        </div>
   
    </>
  )
}

export default ToDoList