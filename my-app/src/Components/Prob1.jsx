import React, { useState } from 'react'

export default function Prob1() {
    const[count,setCount]=useState(1);

    function AddNum(){
        const New11=setCount(count+1);
        console.log(New11);
    }
  return (
    <div>
      <h1>{count}</h1>
    
      <button onClick={AddNum}>click</button>
    </div>
  )
}
