import React,{useState} from 'react';
function update_Objects(){
    const[car,setCar] = useState({year: 2024,
                                  make: "Rolls Royace",
                                  model: "Phantom"  
                                });

    const changeCar = (event) => {
        
        
        setCar(prevCar => ({...prevCar,[event.target.name] : event.target.value}));
        //...prevCar is the previous state of the car object and ...is the spread operator
        // c => (c+1) this is updater
    } 
    return(
        <div>
        <p>Car : {car.year} {car.make} {car.model}</p>

        <input type="number" name="year" value={car.year} onChange={changeCar}/><br />
        <input type="text" name="make" value={car.make} onChange={changeCar}/><br />
        <input type="text" name="model" value={car.model} onChange={changeCar}/><br />
        </div>
    )
}
export default update_Objects