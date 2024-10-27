import React,{useContext} from "react"
import { NameContext } from "./ComponentA.jsx"
function ComponentD(props){
    const user = useContext(NameContext);

    return(
        <div className="box">
            <h1 className="p-5">ComponentD</h1>
            {/* <h1>{`bye ${props.user}`}</h1> */}
            <h1>{`bye ${user}`}</h1>
        </div>
    )
}
export default ComponentD 