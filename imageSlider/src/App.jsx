import './App.css';
import Komi from './assets/komi.webp';
import Shikimori from './assets/shikimori.webp';
import Alya from './assets/alya.webp';
import Shizuka from './assets/shizuka.webp';
import Hanashiro from './assets/hanahshiro.webp';
import { useState,useEffect } from 'react';

function App() {
  const characters = [
    { img: Komi, name: 'Komi', ranking: 1 },
    { img: Shikimori, name: 'Shikimori', ranking: 2 },
    { img: Alya, name: 'Alya-San', ranking: 3 },
    { img: Shizuka, name: 'Shizuka', ranking: 4 },
    { img: Hanashiro, name: 'Hanashiro', ranking: 5 }
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start interval to change image every 3 seconds
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % characters.length);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [characters.length]);
  const increment = () => {
    setCount( (count + 1) % characters.length );
  }
  const decrement = () => {
    setCount(count == 0 ? characters.length - 1 : count - 1);
  }

  return (
    <div className='relative w-80'>
    <div className='items-center justify-center m-0 overflow-hidden font-mono '>
              
        <div className='relative border-2 border-white shadow-md rounded-xl shadow-gray-500 w-72 h-[403px]'>
          
            {/* <img className = "object-cover object-top rounded-lg w-72 h-[400px] duration-1000" src={characters[count].img} alt={characters[count].name} /> */}
            <div className='bg-cover rounded-lg w-72 h-[400px] duration-500' style={{backgroundImage: `url(${characters[count].img})`}}></div>
                <span className= 'absolute grid items-center w-10 h-10 text-2xl text-center text-black rounded-full backdrop-blur-sm top-5 left-5 shadow-custom-lg '><p>{characters[count].ranking}</p></span>
        </div>

    </div>
      <div className='absolute top-[45%] left-[-40px] cursor-pointer' onClick={decrement}> ◀ </div>
      <div className='absolute top-[45%] right-[-10px] cursor-pointer' onClick={increment}> ▶ </div>
    </div>
  );
}

export default App;
