import React from 'react';

const ResultText = ({ userChoice, computerChoice, result, nickname }) => (
  <div className="result-text">
    <p>Nickname: {nickname}</p>
    <p>Your choice: {userChoice}</p>
    <p>Computer's choice: {computerChoice}</p>
    <p>{result}</p>
  </div>
);

export default ResultText;
