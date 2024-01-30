import '../CSSFiles/Letters.css'
export default function EndGame({ isGameOver, isWordGuessed, secretWord, onReset }) {
    if (!isGameOver) {
      return null;
    }
  
    return (
      <div className="end-game">
        {isWordGuessed ? (
          <h1>Congratulations! You guessed the word!</h1>
        ) : (
          <h1>Game Over! The secret word was: {secretWord}</h1>
        )}
        <button onClick={onReset}>Restart Game</button>
      </div>
    );
  }
  