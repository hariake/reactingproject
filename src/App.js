// src/App.js
import React, { useState } from 'react';
import './App.css';
import ResultImage from './components/ResultImage'; 

const choices = ['rock', 'paper', 'scissors'];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    generateComputerChoice(choice);
  };

  const generateComputerChoice = (userChoice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);

    // Introduce a delay before determining the winner (simulating simultaneous choices)
    setTimeout(() => {
      determineWinner(userChoice, computerChoice);
    }, 500); // Adjust the delay as needed
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('It\'s a tie!');
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            <img src={`images/${choice}.png`} alt={choice} />
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{result}</p>
          <ResultImage result={result} />
        </div>
      )}
    </div>
  );
};

export default App;