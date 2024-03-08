import React, { useEffect } from 'react';

const ComputerChoiceGenerator = ({ onGenerate }) => {
  useEffect(() => {

    const generateComputerChoice = () => {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];
      onGenerate(computerChoice);
    };

    generateComputerChoice();

    return () => {

    };
  }, [onGenerate]);

  return <></>; 
};

export default ComputerChoiceGenerator;
