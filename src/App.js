import React, { useState, useCallback } from 'react';
import './App.css';
import Choices from './components/Choices';
import ResultText from './components/ResultText';
import ResultImage from './components/ResultImage';
import Nicknameplay from './components/Nicknameplay';
import ComputerChoiceGenerator from './components/ComputerChoiceGenerator';
import ResultDeterminer from './components/ResultDeterminer';

const App = () => {
  const [nickname, setNickname] = useState('');
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const handleUserChoice = (choice) => {
    console.log(`User chose: ${choice}`);
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = useCallback(() => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const newComputerChoice = choices[randomIndex];
    setComputerChoice(newComputerChoice);
  }, []);

  const handleDetermineResult = (result) => {
    setResult(result);
  };

  const handlePlay = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div className="game-container">
        {!gameStarted && (
                  <Nicknameplay nickname={nickname} setNickname={setNickname} handlePlay={handlePlay} />
        )}
        {gameStarted && (
          <div>
            <Choices handleUserChoice={handleUserChoice} />
            <ComputerChoiceGenerator onGenerate={generateComputerChoice} />
            <ResultDeterminer userChoice={userChoice} computerChoice={computerChoice} onDetermine={handleDetermineResult} />
            {userChoice && computerChoice && (
              <>
                <ResultText userChoice={userChoice} computerChoice={computerChoice} result={result} nickname={nickname} />
                <ResultImage result={result} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
