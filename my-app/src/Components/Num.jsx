import React from 'react'
import { useState } from 'react'

export default function Num() {
   const[count,setCount]=useState(0);
   function handleChange(){
    setCount(count+1);
   }
   function handleClick(){
    setCount(count-1);
   }
  return (
    <div>
    <h1>{count}</h1>
    <button disabled={count==30} onClick={handleChange}>Inc</button>
    <button disabled={count==0}onClick={handleClick}>Dec</button>
      
    </div>
  )
}
