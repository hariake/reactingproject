import React, { useEffect } from 'react';

const ComputerChoiceGenerator = ({ onGenerate }) => {
  useEffect(() => {
    generateComputerChoice();


    return () => {

    };
  }, [onGenerate]);

  const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    onGenerate(computerChoice);
  };

  return <></>; 
};

export default ComputerChoiceGenerator;
