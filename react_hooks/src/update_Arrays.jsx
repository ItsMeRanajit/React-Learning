import React,{useState} from "react";

function updateArray(){
    const [food, setfood] = useState(["Apple","Carrot","Rice","Burger"]);

    const addToList = () =>{
        let foodName = document.getElementById('new-food').value;
        document.getElementById('new-food').value = "";

        setfood(prevFood => [...prevFood, foodName]);
        // = setfood([["Apple","Carrot","Rice","Burger",foodName]) updated by a new array
    }

    const removeFood = (index) =>{
        setfood(food.filter((_,i) => i !== index));
        // _ means the each array elements whose index is checked
    }
    return(
        <div className="w-full text-center mt-7">
            <h2 className="m-5 text-xl font-bold">List of Foods</h2>
            <ol className="m-5 ">
                {food.map((food,index) => <li onClick={()=> {removeFood(index)}} key={index}>{food}</li>)}
            </ol>
            <input type="text" id="new-food" placeholder="Enter a food" />
            <button onClick={addToList}>Add</button>
        </div>
    );
}
export default updateArray;