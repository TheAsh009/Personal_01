import React from 'react'
import { useRecoilState } from 'recoil'
import { Atoms } from './Atom'
function First() {
  const[color,setColor]=useRecoilState(Atoms);

   const handleColor=()=>{
    setColor(color === 'blue' ? 'red':'blue')
   }
  return (
    <div>
       <h1 style={{color:color}}  >Hi , I change color on click button</h1>
       <button onClick={handleColor}> Change Color</button>
    </div>
  )
}

export default First