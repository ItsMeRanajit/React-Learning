import React,{useState,useEffect} from "react";

function useEffect2(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
    window.addEventListener("resize",handleSize)
    console.log("event listener added")
    return() =>{
        window.removeEventListener("resize",handleSize);
        console.log("event listener removed") 
    }

    },[])

    useEffect(() => {
        document.title = `Size ${width} x ${height}`
    },[width,height])
//we could handle the size and height using a normal evt listner, but in that case the number of evt list calls will be very high
//so using useeffect handles this large evt calling by fired when the component is mounted

    function handleSize(){
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    return(
        <> 
            <p>window width : {width}</p>
            <p>window height : {height}</p>
        </>
    )
}
export default useEffect2