import propTypes from 'prop-types'

function List(props){
    // const fruits = [
    //     { id: 1, name: "apple", calories: 95 },
    //     { id: 2, name: "banana", calories: 105 },
    //     { id: 3, name: "cherry", calories: 4 }, 
    //     { id: 4, name: "mango", calories: 202 },
    //     { id: 5, name: "orange", calories: 62 }
    // ];

    const itemList = props.items;
    const category = props.category;
    itemList.sort((a,b) => a.calories-b.calories);
    // itemList.sort((a,b) => a.name.localeCompare(b.name)); //sorting by names
    
    // const filteredItems = itemList.filter( item => item.calories <100)
    
    const listItems = itemList.map(item => <li key={item.id}><b>{item.name}</b> : {item.calories} </li>)
//key is important to uniqly identify each object.
 
    return(<div className="grid items-center p-7 m-7">
            <h2 className="text-lg font-bold text-center border-2 border-black rounded-md bg-cyan-200 ">{category}</h2>
            <ol className="max-w-sm pl-5 text-left list-decimal ">{listItems}</ol>
        </div>);
    }
    List.propTypes = {
        category : propTypes.string,
        items : propTypes.arrayOf(propTypes.shape({id : propTypes.number,
                                                  name: propTypes.string,
                                                  calories : propTypes.number})) //it is for checking the object types
    }

    List.defaultProps ={
        category : "none",
        items:[]
    }
    export default List