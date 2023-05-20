import React from 'react';
import "./List.css"

export default function List(props) {

 

  return (
    <div className='list-item'>
      <div> <button className='list-btn' onClick={()=>{ props.onSelect(props.id)}}> ✖ </button> </div>
      <div><li>{props.text}</li></div>
    </div>
  )
}

