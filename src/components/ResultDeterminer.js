import { useEffect } from 'react';

const ResultDeterminer = ({ userChoice, computerChoice, onDetermine }) => {
  useEffect(() => {
    const determineWinner = () => {
      let result = '';
      if (userChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        result = 'You win!';
      } else {
        result = 'You lose!';
      }
      onDetermine(result);
    };

    determineWinner();
    
  }, [userChoice, computerChoice, onDetermine]);

  return null;
};

export default ResultDeterminer;
