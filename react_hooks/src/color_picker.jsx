import React,{useState} from "react";

function color_picker() {
    const [color, setColor] = useState("#FFFFFF");
    const newColor = (event) =>{
        setColor(event.target.value);
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[40px] font-bold m-5">Color Picker</h1>
            <div className="h-56 m-5 rounded-md shadow-md w-80 shadow-gray-600" style = {{backgroundColor : color}}></div>
            <p className="m-5 font-bold text-md">Selected Color : {color}</p>
            <div className="">
                Select a Color :
                <input className="w-40 h-16 p-3 ml-5 rounded-md" type="color" value={color} onChange={newColor} />
            </div>
        </div>
    );
}

export default color_picker