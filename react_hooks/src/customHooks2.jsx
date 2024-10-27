// import React,{useContext} from "react";
import { useCustomContext } from "./customHooks.jsx";
function customHooks2(){
    const custom2 = useCustomContext();
//here we just imported the function. we dont have to import usecontext and others
    
    return(
        <div>{custom2}</div>
    )
}
export default customHooks2