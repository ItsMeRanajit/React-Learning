import proptypes from "prop-types"
import "./index.css"
function UserGreeting(props){
        const ifTrue = <h1 className="p-5 m-10 text-lg font-extrabold text-center bg-green-300 rounded-lg">Welcome {props.username}</h1>

        const ifFalse = <h1 className="p-5 m-10 text-lg font-extrabold text-center bg-red-300 rounded-lg">Please Log In</h1> 
//storing the return values in variables

    if(props.isLoggedin){
        //     return <h1 className="p-5 m-10 text-lg font-extrabold text-center bg-green-300 rounded-lg">Welcome {props.username}</h1>
        return ifTrue;
    }
        //  return <h1 className="p-5 m-10 text-lg font-extrabold text-center bg-red-300 rounded-lg">Please Log In</h1> 
        return ifFalse;
}

//applying proptypes
UserGreeting.prototypes = {
        isLoggedin : proptypes.bool,
        username : proptypes.string
}


//applying defaultprops
UserGreeting.defaultProps = {
        isLoggedin : false,
        username : "Guest"
}
export default UserGreeting;