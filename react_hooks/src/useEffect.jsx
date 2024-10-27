/* useEffect - runs a chunk of code when
               -a component rerenders
               -a component mounts(some comp. created and joined to other comp.)
               -state of a value changes

useEffect(function,[dependencies])

1. useEffect(() ={}) // runs after every rerender of a comp.
2.useEffect(()=>{},[]) //runs only on mount
3.useEffect(()=>{},[value]) //runs on mountn + state change

USES -
#1 event listeners
#2 dom manipulation
#3 real time updates
#4 fetching data from apis
#5 clean up when comp unmounts
*/

import React,{useEffect,useState} from "react";

function Useeffect(){
    const [count, setCount] = useState(0);
    const [color,setColor] = useState("green");

    useEffect(()=>{
        document.title = `Count ${count} - ${color}`
    },[count,color])//itll work if any rerendering happens in page, even if anything unrelated, we can add dependency of count. which means only if count statechanges then fire the useEffect
    //here if color is not the part of dep. so if the color changes therell be no change in title for color

    const addcount = () =>{
        setCount(c => c + 1);
    }
    const subscount = () =>{
        setCount(c => c - 1);
    }
    const chngColor = () => {
        setColor(c => (c === "green") ? "red" : "green");
    }
    return(
        <div>
            <p style={{color : color}} className="text-3xl font-bold ">Count : {count}</p>
            <button onClick={addcount}>add</button>
            <button onClick={subscount}>substract</button>
            <button onClick={chngColor}>change</button>
        </div>
    );
}
export default Useeffect;