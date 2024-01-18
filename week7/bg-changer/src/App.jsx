import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("red")
  return (
    <>
    
      <div className=' w-full h-[89vh] duration-200 rounded-3xl'
      style={{backgroundColor: color}} >
        
        <div className=' fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
        <div className=' fixed flex flex-wrap justify-center gap-4 shadow-lg px-9 py-3 rounded-xl'>
          <button onClick={()=>setcolor("red")} className=' outlin-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "red"}}>RED</button>
          <button onClick={()=>setcolor("blue")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "blue"}}>BLUE</button>
          <button onClick={()=>setcolor("green")} className=' outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "green"}}>GREEN</button>
          <button onClick={()=>setcolor("orange")} className=' outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "orange"}}>ORANGE</button>
          <button onClick={()=>setcolor("pink")} className=' outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "pink"}}>PINK</button>
          <button onClick={()=>setcolor("black")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "black"}}>BLACK</button>
          <button onClick={()=>setcolor("brown")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "brown"}}>BROWN</button>
          <button onClick={()=>setcolor("yellow")} className=' outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "yellow"}}>YELLOW</button>
          <button onClick={()=>setcolor("violet")} className=' outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor: "violet"}}>VIOLET</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App

