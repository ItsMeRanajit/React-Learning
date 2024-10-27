import React,{useState} from "react";

function ToDo_List(){
     
const [task, setTask] = useState(["Drink Chai","Eat BreakFast","Start Reading"]);
const [newTask, setNewTask] = useState("");


function addTask(){
    if(newTask.trim() !== ""){
    setTask(tasks => [...tasks,newTask]);
    setNewTask("")}
}
function handleInputTask(event) {
    setNewTask(event.target.value)
}

function removeTask(index){
    const updated_tasks = task.filter((_,i) => i !== index);
    setTask(updated_tasks);
}
function moveTaskUp(index){
    if(index > 0){
    const updated_tasks = [...task];
    [updated_tasks[index],updated_tasks[index-1]] = [updated_tasks[index-1],updated_tasks[index]];
    setTask(updated_tasks);
    }
}
function moveTaskDown(index){
    if(index < task.length - 1){
        const updated_tasks = [...task];
        [updated_tasks[index],updated_tasks[index+1]] = [updated_tasks[index+1],updated_tasks[index]];
        setTask(updated_tasks);
        }
}

     return(
    <div className="flex flex-col items-center justify-center w-full">
        <h1 className="m-5 mt-10 text-5xl font-extrabold">To-Do List</h1>
        <ol className="h-[500px] w-[700px] overflow-y-auto text-center">
            {
                task.map((eachTask,index) =>
                <li className="flex items-center justify-between px-4 m-2 border-2 border-gray-500 rounded-md min-h-11" key={index}>
                    <span className="text-left w-96">{eachTask}</span>
                    <div className="flex justify-between w-60">
                        <button className="button" onClick={()=>{removeTask(index)}}>Delete</button>

                        <button className="text-2xl" onClick={()=>{moveTaskUp(index)}}>🔼</button>

                        <button className="text-2xl" onClick={()=>{(moveTaskDown(index))}}>🔽</button>
                    </div>
                </li>)
            }
        </ol>
        <div>
            <input className="h-12 px-4 mr-6 text-black rounded-md w-96" type="text"
                   placeholder="Enter a task..." 
                   value={newTask}
                   onChange={handleInputTask}/>

            <button className="h-12 rounded-md button" onClick={()=>{addTask()}}>
                Add
            </button>

        </div>
    </div>
     );
}
export default ToDo_List