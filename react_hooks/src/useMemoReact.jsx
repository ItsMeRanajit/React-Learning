/* useMemo(() => {},[dependency array])-
        - useMemo is a react hook ie. used to memorize some value.
        - it is very helpful when some heavy task renders.
        - when a program consits of hefty tasks and for other changes the component continuously rerendering, means that hefty task in the component will also excecute again. 
        - usememo helps to memorize the value of that hefty task so that that task doesnot rerender again while comp rerendering.
        - the dependency array helps to rerender the task only if some constrain changes, if the dep array has nothing itll will not rerender again and the task will be ex. only one time while initial render.

        */

import React,{useState,useMemo} from "react";

function useMemo_(){
    const nums = new Array(30000).fill(0).map((_,i) =>{
        return {
            idx : i,
            isMillion : i === 1000,
        }
    })
    const [number, setNumber] = useState(nums);
    const [count, setCount] = useState(0);

    const million = useMemo(() => {
        return number.find(item => item.isMillion === true,[number])});

    console.log(million)
    function counter(){
        setCount(c => c + 1);
    }
    return(
        <div>
            count : {count} , {million.idx}
            <button onClick={counter}>+</button>
        </div>
    )
}
export default useMemo_

/* the array finding is a heavy task to useMemo will remember the value, and only ex again when number is changed*/
