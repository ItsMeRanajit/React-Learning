import './index.css';
import style from './Button2/Button2.module.css'
import Button2 from './Button2/Button2';//this is how to import the css file/module of a separate component
function  Button(){
    return(
        <>
        <button className=" w-24 h-8 bg-purple-500 text-white border-purple-800 border-2 rounded-md transition-all hover:bg-purple-600 shadow-sm shadow-gray-800">click me</button>
        <button className={style.button2}>using modules</button>
        {/* and use some specific style to apply  */}
        <Button2/>
        </>
    );
}
export default Button;