import image from "./assets/img.jpg"
import Button from "./Button";
import './index.css';

function Card() {
    return(
    <div className="inline-block">
        <div className="border-gray-300 border-2 rounded-md shadow-md p-4 m-10 flex flex-col justify-center items-center">
            <img src={image} alt="" className=" w-28 h-28 rounded-full shadow-circular"/>
            <h1 className="text-gray-600 text-[30px] font-bold">Hey It's me</h1>
            <p className="mb-3">Start the react journey</p>
            <Button/>
            {/* //another button will be creted to show how a clean css can be applied to a component */}
        </div>
    </div>
    );
}

export default Card;