import React,{useState} from "react"

function counter(){
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0);
    }

    return(
        <div className="w-full text-center rounded-md p-7">
            <p className="text-[140px] m-5">{count}</p>
            <button className="button" onClick={increment}>Increment</button>
            <button  className="button" onClick={decrement}>Decrement</button>
            <button  className="button" onClick={reset}>Reset</button>
        </div>
    );
}
export default counter