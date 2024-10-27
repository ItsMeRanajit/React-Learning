//onchange - primarily works with form elements
// triggers every time when imput value changes

import React,{useState} from "react";

function onChange(){
    const [name, setName] = useState("");
    const [ship, setShip] = useState("");
    
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleShipChange = (event) => {
        setShip(event.target.value);
    }
    return (
        <div>
            <input value = {name} placeholder="Enter a name" onChange={handleChange} />
            <p>Name : {name}</p>
        <label htmlFor="">
            Pick Up :
            <input type="radio" value="Pick up" checked={ship === "Pick up"} onChange={handleShipChange}/>
        </label><br />
        <label htmlFor="">
            Delivery :
            <input type="radio" value="Delivery" checked={ship === "Delivery"} onChange={handleShipChange}/>
        </label>
            <p>Shipping : {ship}</p>
        </div>
    );
}
export default onChange