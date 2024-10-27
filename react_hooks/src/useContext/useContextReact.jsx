/* useContext - is a hook that allows to share values between multiple levels of components without using props through each level

ie. 
<component A/>
    <component B/>
        <component C/>
            <component D/>*/


/* to pass through components the newbie method is just making a props chaining. means passing the props from each level and using it somewhere.
    but it makes the code more fragile so it can break the chain anytime.

more easy method is to using useContext()----

# Provider ---
1. import createContext
2. export const/let VARIABLE = createContext();
3. cover the child component
        <VARIABLE.Provider value = "abcd">
            <childComponent/>
        </VARIABLE.Provider>

#Consumer---
1. import useContext
2. import the VARIABLE from providerFile
3. const newValue = useContext(VARIABLE);
4. use the newValue which is "abcd"


THE CONSUMER CAN BE MULTIPLE FILES/CHILDREN
*/
