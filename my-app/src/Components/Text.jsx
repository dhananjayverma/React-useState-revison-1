import React, { useState } from 'react'

export default function Text() {
    const[text,setText]=useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }
  return (
    <div>
      <input value={text} onChange={handleChange}/>
   
   <p>you type:{text}</p>

   <button onClick={()=>setText('hello')}>Reset</button>
    </div>
  )
}
