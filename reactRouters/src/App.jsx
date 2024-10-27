import { Home } from './Home.jsx'
import { Movie } from './Movie.jsx'
import { Songs } from './songs.jsx'
import Applayout from './AppLayout.jsx'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
   {
    path : '/',
    element : <Applayout />,
    children : [
      {
        path : "/",
        element : <Home/> // dummy page, indicates if only / is given directs to Home
      },
      {
        path : "/movie",
        element : <Movie/> 
      },
      {
        path : "/songs",
        element : <Songs/> 
      }
    ]
   }
  ])
  //like this we need to declare the thing to add header and footer for every page. by using header and foooter comp only once

  // const router = createBrowserRouter([
  // {
  //   path : "/",
  //   element : <Home/> // dummy page, indicates if only / is given directs to Home
  // },
  // {
  //   path : "/movie",
  //   element : <Movie/> 
  // },
  // {
  //   path : "/songs",
  //   element : <Songs/> 
  // }
  // ]);
  return <RouterProvider router={router} />
}

export default App
/* to implement react router, wee need to createBrowserRouter() function which passes an array of objects, and each object has path, which inicates what need to be the url after / and element what page to go according to tha path */

/* and it must return the value to RouterProvider usign router props */

/* so writng http://localhost:5173/ take you to home
  http://localhost:5173/movie takes you to movie
  http://localhost:5173/songs takes to song*/