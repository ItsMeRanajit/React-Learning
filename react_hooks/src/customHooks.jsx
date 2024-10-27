/* 
# custom hook must have use before their name ie, useNew()
# "       "    is made using existing hooks using react
# all side effects must be treated
*/

import React,{createContext, useContext} from "react";
import CustomHooks2 from './customHooks2.jsx'
export const custom = createContext();
function customHooks(){

    return(
        <div>
        <custom.Provider value = {"Ranajit"}>
            <CustomHooks2/>
        </custom.Provider>
    </div>
    )

}
export const useCustomContext = () => {
    const context = useContext(custom);
    if(context === undefined)
        throw new Error("Component must be wrapped in the custom")
        //wehn a component which is not a child of custom tries to fetch the value. then this error is thrown
    return context;
}
//this is my custom context. so we dont need to write useContext in the child file
export default customHooks;