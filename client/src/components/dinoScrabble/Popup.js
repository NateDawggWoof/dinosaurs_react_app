import React, { useEffect } from "react";

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, words }) => {
    function checkWin(correct, wrong, word) {
    let status = "win"

   // Check for win
    word.split("").forEach((letter) => {
        if (!correct.includes(letter)) {
            status = "";
        }
    });

    // Check for lose
    if (wrong.length === 6) status = "lose";

    return status;
    }

    const winDino = () => {
        if (selectedWord === "tyra") {
            return <div><p>Congratulations! You won!</p><p>This is: {selectedWord}</p><img style ={{width: 200,height: 200}} src={`/image/02.png`}/></div>
        } else if (selectedWord === "tricky"){
            return <div><p>Congratulations! You won!</p><p>This is: {selectedWord}</p><img style ={{width: 200,height: 200}} src={`/image/03.png`}/></div> 
        } else if (selectedWord === "terry"){
            return <div><p>Congratulations! You won!</p><p>This is: {selectedWord}</p><img style ={{width: 300,height: 300}} src={`/image/04.png`}/></div> 
        } else if (selectedWord === "emily"){
            return <div><p>Congratulations! You won!</p><p>This is: {selectedWord}</p><img style ={{width: 300,height: 300}} src={`/image/01.png`}/></div>  
        } else if (selectedWord === "stig"){
            return <div><p>Congratulations! You won!</p><p>This is: {selectedWord}</p><img style ={{width: 300,height: 300}} src={`/image/06.png`}/></div>  
        } else {
            return <div><p>Congratulations! You won!</p><p>This is: {selectedWord}</p><img style ={{width: 300,height: 300}} src={`/image/05.png`}/></div>  
        } 
    }

    let finalMessage = "";
    let finalMessageRevealWord = "";
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
        finalMessage = winDino();
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
        finalMessage = "Try Again! ";
        finalMessageRevealWord = `...the word was:  ${selectedWord}`;
        playable = false;
    }

    useEffect(() => {
        setPlayable(playable);
    });

    return (
        <div className="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}}>
        <div className="popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <div>{winDino}</div>
            <button id="scrabble-button" onClick={playAgain}>Play Again</button>
        </div>
        </div>
    );
};

export default Popup;
