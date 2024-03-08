
import React, { useEffect } from 'react';

const ResultDeterminer = ({ userChoice, computerChoice, onDetermine }) => {
  useEffect(() => {
    determineWinner();

   
    return () => {
      
    };
  }, [userChoice, computerChoice, onDetermine]);

  const determineWinner = () => {
    if (userChoice === computerChoice) {
      onDetermine("It's a tie!");
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      onDetermine('You win!');
    } else {
      onDetermine('You lose!');
    }
  };

  return <></>; 
};

export default ResultDeterminer;
