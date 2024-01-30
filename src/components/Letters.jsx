import React from 'react';
import Letter from './Letter';
import '../CSSFiles/Letters.css'

export default function Letters({ letterStatus ,selectLetter }) {
  return (
    <div className='letters-container'>

      {Object.keys(letterStatus).map((letter, index) => {
        const className = letterStatus[letter] ? 'chosen' : 'notchosen';
        return (          <div className={className} key={index}>            <Letter letter={letter} selectLetter={selectLetter} />          </div>
        );
      })}

    </div>
  );
}
