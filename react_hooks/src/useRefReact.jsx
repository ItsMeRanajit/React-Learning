/*useRef - is a react hook similar to useState. 
           but it does not causes re-renders when value changes. 
           - it is used when you want a component to remember some info but dont want to re-render

        #USES-
        1. accessing/interacting DOM elements
        2. handling animations , transitions
        3. managing intervals, timers
        */

import React,{useState,useRef,useEffect} from "react";
function useRefReact(){

    const ref = useRef(0);
    const inputref = useRef(null);

    useEffect(()=>{
        console.log("component rendered")// as we know this useEffect will trigger when comp re-renders.
        // console.log(ref)
        console.log(inputref)
    })

    function handleClick(){
        ref.current++; 
        //.current is used to fetch the current value
        console.log(ref.current)
    }
    function handleClick2(){
        inputref.current.focus();
        // it will make a focus on the input tag
        inputref.current.style.backgroundColor = "yellow"
    }
    return(
        <div>
            <button onClick={handleClick} className="border-2 border-black">Click Me </button>

            
            <button onClick={handleClick2} className="border-2 border-black">Click Me for input </button>
            <input className="border-2 border-black" type="text" ref = {inputref}/>
            {/* ref attribute used to create references of an html elements, means inputref will consist this input tag and its properties */}
            
        </div>
    )
}

export default useRefReact

// the component is rendered 1st while loading, we can see by useEffect code excecution

// but when were clicking on the button ref value is increased but not re-rendering

//ref variable is actually an object, which has only one property ie. current

//the conclusion is useref make the code more efficient by not causing unnecessary re-renders
