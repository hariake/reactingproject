// src/App.js
import React, { useState } from 'react';
import './App.css';
import Choices from './components/Choices';
import ResultText from './components/ResultText';
import ResultImage from './components/ResultImage';
import ComputerChoiceGenerator from './components/ComputerChoiceGenerator';
import ResultDeterminer from './components/ResultDeterminer';

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    console.log(`User chose: ${choice}`);
    setUserChoice(choice);

    // Trigger the computer's choice generation for each user choice
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const newComputerChoice = choices[randomIndex];
    setComputerChoice(newComputerChoice);
  };

  const handleDetermineResult = (result) => {
    setResult(result);
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <Choices handleUserChoice={handleUserChoice} />
      <ComputerChoiceGenerator onGenerate={generateComputerChoice} />
      <ResultDeterminer userChoice={userChoice} computerChoice={computerChoice} onDetermine={handleDetermineResult} />
      {userChoice && computerChoice && (
        <>
          <ResultText userChoice={userChoice} computerChoice={computerChoice} result={result} />
          <ResultImage result={result} />
        </>
      )}
    </div>
  );
};

export default App;
