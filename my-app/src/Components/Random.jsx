import React, { useState } from 'react'

export default function() {
    const[num,setNum]=useState(function getRandomNum(){
        return Math.floor(Math.random()*100);
    })
    function handleClick(){
        setNum(Math.floor(Math.random()*100));
    }
  return (
    <div>
    <h1>Number:{num}</h1>
    <button onClick={handleClick}>click</button>
      
    </div>
  )
}
