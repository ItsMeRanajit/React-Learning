import React,{useState,useEffect} from "react";

function digitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval (()=>{
            setTime(new Date())
        },1000);
        
        return () => {
            clearInterval(interval);
        }
    },[])

    function formatTime (){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // we dont want to go to 13 14 after noon. so when hours is 13 then it becomes 1 for 13 % 12 ie 1

        // when hour is 12 then hours becomes 0 thats why were using || 12. wehn its 0 it is false so the || 12 is set as hours
        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}    ${meridian}`
        
    }

    function padZero(num){
        return num < 10 ? "0"+num : num;
    }
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="w-full text-[80px] p-10 text-center text-white backdrop-blur-sm">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default digitalClock