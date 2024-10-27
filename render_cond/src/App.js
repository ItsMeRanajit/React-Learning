import UserGreeting from './userGreeting.jsx';
import Fruits from './renderLists.jsx'
import './App.css';
import "./index.css"

function App() {
   const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "banana", calories: 105 },
        { id: 3, name: "cherry", calories: 4 }, 
        { id: 4, name: "mango", calories: 202 },
        { id: 5, name: "orange", calories: 62 }
    ];
    const vegetables = [
      { id: 1, name: "carrot", calories: 41 },
      { id: 2, name: "broccoli", calories: 55 },
      { id: 3, name: "spinach", calories: 23 },
      { id: 4, name: "potato", calories: 77 },
      { id: 5, name: "bell pepper", calories: 20 }
  ];

  const snacks = [
    { id: 1, name: "chips", calories: "hey" },
    { id: 2, name: "cookies", calories: 160 },
    { id: 3, name: "popcorn", calories: 106 },
    { id: 4, name: "pretzels", calories: 108 },
    { id: 5, name: "granola bar", calories: 120 }
];

  
  return (
    <>
        <UserGreeting isLoggedin = {true} username = "Ranajit"/>
        <UserGreeting isLoggedin = {false} username = "Ranajit"/>
        <UserGreeting />
        {/* <Fruits/> */}
        <Fruits items = {fruits} category = {"Fruits"}/>
        <Fruits items = {vegetables} category = {"Veggies"}/>
        {snacks.length > 0 && <Fruits items = {snacks} category = "Snacks"/>}
      {/* short hand for ternary opr. . and if the length is > 0 only the print the component  */}

    </>
  );
}
// passing the arrays ar props from app.js makes the renderlist component reusabl.
// we can pass any array of objs to the comp. 
export default App;
