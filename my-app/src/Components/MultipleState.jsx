import React, { useState } from 'react'

export default function MultipleState() {
  const[name,setName]=useState('dhananjay');
  const [age,setAge]=useState(25);
    return (
    <div>
    <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
    />
      <button onClick={()=>setAge(age+1)}>increment age</button>

<p>Hello,{name}.your age is{age}.</p>
    </div>
  )
}
