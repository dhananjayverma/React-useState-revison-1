import React from 'react'
import { useState } from 'react';
export default function Count() {
    const [state, setstate] = useState(0);
    function handleClick(){
        setstate(state+1);
    }
    
  return (
    <div>
      <button onClick={handleClick}>
        you press me {state} times
      </button>
    </div>
  )
}
