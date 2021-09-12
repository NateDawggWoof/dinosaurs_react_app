import React, {useState} from "react";
import QuizForm from "../components/QuizForm";

const QuizContainer = ({allDinosaurs}) => {
    return (
        <div style={{position: 'relative',textAlign: 'center', padding: 40}}>
            <h1> Dino Quiz</h1>
            <QuizForm allDinosaurs={allDinosaurs}/>
        </div>
    )
}

export default QuizContainer
