import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className='w-screen h-screen duration-500' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2'>
      <div className='flex  flex-wrap justify-center rounded-lg  p-3  gap-3 bg-white '>
        <button className='bg-red-500 rounded-md w-20 outline-none shadow-md text-white hover:bg-red-800'onClick={()=>setColor("red")}> Red</button>  
        <button onClick={()=>setColor("green")} className='bg-green-500 rounded-md w-20 outline-none shadow-md text-white hover:bg-green-950'> Green</button>
        <button onClick={()=>setColor("black")} className='bg-black rounded-md w-20 outline-none shadow-md text-white'> Black</button>
        <button onClick={()=>setColor("purple")} className='bg-purple-500 rounded-md w-20 outline-none shadow-md text-white hover:bg-purple-800'>Purple</button>
        <button onClick={()=>setColor("blue")}  className='bg-blue-500 rounded-md w-20 outline-none shadow-md text-white hover:bg-blue-800'>Blue</button>
        <button onClick={()=>setColor("orange")} className='bg-orange-500 rounded-md w-20 outline-none shadow-md text-white hover:bg-orange-800' >Orange</button>
        <button onClick={()=>setColor("white")}  className='bg-white rounded-md w-20 outline-none shadow-md text-black hover:bg-gray-400'>White</button>
        <button onClick={()=>setColor("pink")}  className='bg-pink-500 rounded-md w-20 outline-none shadow-md text-white hover:bg-pink-800'>Pink</button>
      </div>
    </div>
    </div>  
  )
}
export default App
