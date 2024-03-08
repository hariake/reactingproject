import React from 'react';

const Choices = ({ handleUserChoice }) => {
  const choices = ['rock', 'paper', 'scissors'];

  return (
    <div className="choices">
      {choices.map((choice) => (
        <button key={choice} onClick={() => handleUserChoice(choice)}>
          <img src={`images/${choice}.png`} alt={choice} />
        </button>
      ))}
    </div>
  );
};

export default Choices;
