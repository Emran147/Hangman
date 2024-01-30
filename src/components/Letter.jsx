import React from 'react'

export default function Letter(props) {

  return (
   <span onClick={()=>props.selectLetter(props.letter)}> {props.letter} </span>
  )
}
