import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
      <h2>
        {wrongLetters.length > 0 && <p>Wrong letters:</p>}
        {wrongLetters.map((letter, i) => <span key={i}>{letter}</span>).reduce((prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]), null)}
      </h2>
      </div>
    </div>
  );
};

export default WrongLetters;
