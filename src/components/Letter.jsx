import React from 'react'
import '../CSSFiles/Letters.css'

export default function Letter(props) {

  return (
    <div className='one-letter-div'>
   <span className='letter-span' onClick={()=>props.selectLetter(props.letter)}> {props.letter} </span>
   </div>
  )
}
