import React from 'react';
import '../CSSFiles/Letters.css'; 

export default function Score({score}) {
  let scoreClass = '';

  if (score >= 80) {
    scoreClass = 'high-score';
  } else if (score >= 50 && score < 80) {
    scoreClass = 'medium-score';
  } else {
    scoreClass = 'low-score';
  }

  return (
    <div className={`score ${scoreClass}`}>Score: {score} </div>
  );
}
