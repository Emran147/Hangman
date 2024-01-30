import React, { useState } from 'react';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
import './App.css';

function App() {
  const solutions = [ { word: 'TAXI', hint: 'cab' } , { word: 'CAT', hint: 'mewooooooo' }]
  const getRandomSolution = function() {
    const randomIndex = Math.floor(Math.random() * solutions.length);
    return solutions[randomIndex];
  };
  const [solution,setSolution] = useState(getRandomSolution())
  const [score, setScore] = useState(100);
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());

  const updateScore = (result) => {
    setScore(score + (result ? 5 : -20));
  };

  const selectLetter = (letter) => {
    setLetterStatus({ ...letterStatus, [letter]: true });
    updateScore(solution.word.includes(letter));
  };

  const isWordGuessed = solution.word.split('').every(letter => letterStatus[letter]);
  const isGameOver = score <= 0 || isWordGuessed;

  function resetGame() {
    setScore(100);
    setSolution(getRandomSolution())
    setLetterStatus(generateLetterStatuses())
  };

  function generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  return (
    <div className="App">
      {!isGameOver && (
        <div className='main-game'>
          <Score score={score}/>
          <Solution letterStatus={letterStatus} solution={solution} />
          <Letters letterStatus={letterStatus} selectLetter={selectLetter} />
        </div>
      )}
      {isGameOver && (
        <EndGame isGameOver={isGameOver} isWordGuessed={isWordGuessed} secretWord={solution.word} onReset={resetGame} />
      )}
    </div>
  );
}

export default App;
