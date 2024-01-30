import React from 'react'
import Letter from './Letter'


export default function Solution({letterStatus,solution}) {
  return (
    <div>
        
        {solution.word.split('').map((letter,index) =>
        letterStatus[letter] ?    <Letter letter={letter} key={index}/> : '_ '        )}
        <div> 
                   {solution.hint}
        </div>
    </div> 
  )
}
