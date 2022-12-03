import React, { useState } from 'react'

export default function MYcheckBox() {
  const[liked,SetLiked]=useState(true);
  
  function handleChange(e){
    SetLiked(e.target.checked);
  }
    return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        i like it
      </label>
      <p>you {liked ?"liked" :"did not like"}this.</p>
    </div>
  )
}
