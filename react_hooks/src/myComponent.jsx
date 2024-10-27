import React,{useState} from "react";

//useState - is a React hook that lets you add state to a functional component. It returns an array with two elements: the current state value and a function (setter) to update that state. When the state is updated using the setter function, React re-renders the component to reflect the changes
function myComponent(){
    const [name , setname] = useState("Guest");
    const [age , setage] = useState(0); //holding some default values
    const [student, setStudent] = useState(false);
    
    //[stateful variable , setter]
    //stateful var. is the varible is the var thatll be updated
    //setter is the var which will make changes in the stateful var.

    const updateName = () =>{
        setname("Ranajit");
    }
    const updateAge = () =>{
        setage(age+1);
    }
    const updateStudent = () =>{
        setStudent(!student);
    }
    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set name</button>
            <p>Age : {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Student : {student ? "Yes" : "No"}</p>
            <button onClick={updateStudent}>Is Student</button>
        </div>
    );
}
export default myComponent;