import React,{useState,useRef, useEffect} from "react"

function stopWatch(){

    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0)
    const interval = useRef(null);
    const startTime = useRef(0);

    useEffect(()=>{
        if(isRunning){
            interval.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime.current)
            }, 10);
            
            return () =>{
                clearInterval(interval.current)
            }
        }
    },[isRunning])

    function start(){
        setRunning(true)
        startTime.current = Date.now() - elapsedTime   
    }

    function stop(){
        setRunning(false)
    }

    function reset(){
        setElapsedTime(0);
        setRunning(false)
    }

    function formattime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milis = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milis = String(milis).padStart(2,"0");

        return `${minutes}:${seconds}:${milis}`;
    }
    return(
        <div className="flex flex-col items-center justify-center w-full font-mono">
            <div className="flex flex-col items-center justify-evenly w-[500px] h-72 border-2 border-violet-600 m-10 rounded-lg shadow-lg shadow-violet-600 bg-violet-50">
            <div className="text-[70px]">{formattime()}</div>
            <div className="flex justify-between w-80">
                <button className="button" onClick={start}>Start</button>
                <button className="button" onClick={stop}>Stop</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
            </div>
        </div>
    )
}
export default stopWatch