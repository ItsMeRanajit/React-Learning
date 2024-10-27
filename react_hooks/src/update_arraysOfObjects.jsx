import React,{useState} from "react";

function update_arrayOfObjects(){

    const [car, setCar] = useState([]);
    const [carYear,setcarYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("")
    const [model, setModel] = useState("");

    const addCar = () => {
        let newCar = {year : carYear,
                      make : make,
                      model : model
        }
        setCar(c =>[...c,newCar]);
        setcarYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    const removeCar =(index)=>{
        setCar(c => c.filter((_,i) => i !== index));
    }
    const handleYear = (event)=>{
        setcarYear(event.target.value);
    }
    const handleMake = (event)=>{ 
        setMake(event.target.value);
    }
    const handleModel = (event)=>{
        setModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                { 
                    car.map((ele,index) => <li onClick={()=>{removeCar(index)}} key={index}>{ele.year} {ele.make} {ele.model}</li>)
                }
            </ul>
            <input type="number" value={carYear} onChange={handleYear}/>
            <input type="text" value={make} onChange={handleMake}/>
            <input type="text" value={model} onChange={handleModel}/>
            <button onClick={addCar}>Add</button>

        </div>
    );

}
export default update_arrayOfObjects