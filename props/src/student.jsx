/*props - that are properties that are shared between components.
      - a parent can send data to its child component. like app is sending to student.
      - you can think of this like objects. each component app is using of student is sending some data which can be interpreted as object creation with values. and the child component as class as the values are assigned to its property.*/
import propTypes from 'prop-types'
function student(props){
    return(
        <div className=" bg-red-300 p-5 m-10 rounded-md shadow-md shadow-gray-500 font-medium font-mono inline-block">
            <p>Name : {props.name} </p>
            <p>Age : {props.age} </p>
            <p>Is he a Student : {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
//getting a property name by app.jsx
}

/*propTypes - it is a property that ensures the values passed by the parent belongs to the correct datatype as mentioned in the propTypes.
- if is not done correctly, then it gives an error in console. but no error can be seen in page */
student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool

}
//that is how proptypes are used


//defaultProps = it is a default value in case some values are not passed by the parent. then it sets the default value to that unknown value 

student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false
}
//for each value a defaultProp is set
export default student;