import { useState } from "react"
import React,{createContext} from "react";
import ComponentB from "./ComponentB.jsx"

export const NameContext = createContext();

function ComponentA(){
    const [name, setName] = useState("Ranajit");
    return(
        <div className="box">
            <h1 className="p-5">ComponentA</h1>
            <h2>{`hey ${name}`}</h2>
            <NameContext.Provider value = {name}>
                {/* <ComponentB user={name}/> */}
                <ComponentB/>
            </NameContext.Provider>

        </div>
    )
}
export default ComponentA
 