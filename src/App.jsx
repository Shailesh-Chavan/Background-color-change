import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 gap-2'>
        <button onClick={() => setColor("orange")} className='outline-none border rounded-lg text-black h-10 px-5 m-2  transition-colors duration-150 focus:shadow-outline' style={{backgroundColor: "orange"}}>
          Orange
        </button>
        <button onClick={() => setColor("red")} className='outline-none border rounded-lg text-white h-10 px-5 m-2  transition-colors duration-150 focus:shadow-outline' style={{backgroundColor: "red"}}>
          Red
        </button>
        <button onClick={() => setColor("blue")} className='outline-none border rounded-lg text-white h-10 px-5 m-2  transition-colors duration-150 focus:shadow-outline' style={{backgroundColor: "blue"}}>
          Blue
        </button>
        <button onClick={() => setColor("Purple")} className='outline-none border rounded-lg text-white h-10 px-5 m-2  transition-colors duration-150 focus:shadow-outline' style={{backgroundColor: "Purple"}}>
          Purple
        </button>
        <button onClick={() => setColor("Brown")} className='outline-none border rounded-lg text-white h-10 px-5 m-2  transition-colors duration-150 focus:shadow-outline' style={{backgroundColor: "Brown"}}>
          Brown
        </button>
        <button onClick={() => setColor("Yellow")} className='outline-none border rounded-lg text-black h-10 px-5 m-2  transition-colors duration-150 focus:shadow-outline' style={{backgroundColor: "Yellow"}}>
        Yellow
        </button>
        </div>
    </div>
  )
}

export default App
