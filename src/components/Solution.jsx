import React from 'react'
import Letter from './Letter'
import '../CSSFiles/Letters.css'


export default function Solution({letterStatus,solution}) {
  return (
    <div className='solution-area'>
        
        {solution.word.split('').map((letter,index) =>
        letterStatus[letter] ?    <Letter letter={letter} key={index}/> : <Letter letter={'_'} key={index}/>        )}
        <div className='solution-hint'> 
          <p>{solution.hint}</p>
           
        </div>
    </div> 
  )
}
