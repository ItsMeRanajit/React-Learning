import Student from "./student.jsx"
import './App.css'

function App() {
 return(
  <>
  <Student name = "Ranajit" age= {21} isStudent = {true}/>
  <Student name = "Aman" age= {22} isStudent = {true}/>
  <Student name = "Anisha" age= {22} isStudent = {true}/>
  <Student name = "Ronaldo" age= {39} isStudent = {false}/>

  {/* //to send a set of props we need to place the datas in one line. */}
  
  {/* default props --> */}
  <Student  age= {39} isStudent = {false}/>
  <Student/>
  </>
 );
}


//sending the name. && if the value is not a string we need to use a {} 
export default App
