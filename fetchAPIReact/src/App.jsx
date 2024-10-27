import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const API = "https://jsonplaceholder.typicode.com";
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

//this is basic api call
  // useEffect(() =>{
  //   //returns a promise
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     // console.log("API response - ", res.data);
  //     setMyData(res.data);
  //   }).catch((error) => {
  //     console.log(error)
  //     setIsError(error.message);
  //   })
  // })

// this is using async await 
useEffect(() => {
    getapiData(`${API}/posts`);
  })
  const getapiData = async (url) =>{
    try {
      const res =await axios.get(url);
      setMyData(res.data);
    }
    catch(error){
      setIsError(error.message);
    }
  } 
  return (
    <>
    <h2>Axios Response at console log</h2>
    {isError !== "" && <h2>{isError}</h2>}
    {
      myData.map((item,_)=>
      {
        const {id , title , body } = item;
        return <div key = {id}>
          <h2>{title.slice(0,15)}</h2>
          <p>{body.slice(0,60)}</p>
        </div>
      })

    }
    </>
  )
}

export default App
