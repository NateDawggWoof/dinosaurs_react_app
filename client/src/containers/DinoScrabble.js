import React, { useState, useEffect } from "react";
import Home from "../components/dinoScrabble/Home";
import WrongLetters from "../components/dinoScrabble/WrongLetters";
import Word from "../components/dinoScrabble/Word";
import Popup from "../components/dinoScrabble/Popup";
import Notification from "../components/dinoScrabble/Notification";
import "../styles/scrabble/App.css";
// import DinoList from '../components/DinoList';

const words = [
    "tyra",
    "tricky",
    "terry",
    "emily",
    "stig",
    "dippie"
]

let selectedWord = words[Math.floor(Math.random() * words.length)];

function DinoScrabble() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {

        function showNotification(setter) {
            setter(true);
            setTimeout(() => {
              setter(false);
            }, 2000);
          }

      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            showNotification(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            showNotification(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Home />
      <div className="game-container">
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup words={words} correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default DinoScrabble;
