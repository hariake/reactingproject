import React from 'react';

const ResultText = ({ userChoice, computerChoice, result }) => (
  <div className="result-text">
    <p>Your choice: {userChoice}</p>
    <p>Computer's choice: {computerChoice}</p>
    <p>{result}</p>
  </div>
);

export default ResultText;