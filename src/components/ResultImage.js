import React from 'react';
import './ResultImage.css'

const ResultImage = ({ result }) => {
  const getImageSrc = () => {
    if (result === 'You win!') {
      return '../images/win.png'; // Adjust the path as needed
    } else if (result === 'You lose!') {
      return '../images/lose.png'; // Adjust the path as needed
    } else if (result === "It's a tie!") {
      return '../images/tie.png'; 
    } else {
      return null;
    }
  };

  const imageSrc = getImageSrc();

  return (
    <div className="result-image">
      {imageSrc && <img src={imageSrc} alt={result} />}
    </div>
  );
};

export default ResultImage;