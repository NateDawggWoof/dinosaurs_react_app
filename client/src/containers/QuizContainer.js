import React, {useState} from "react";
import QuizForm from "../components/QuizForm";

const QuizContainer = ({allDinosaurs}) => {
    return (
        <div>
            <h1> I'm Quiz</h1>
            <QuizForm allDinosaurs={allDinosaurs}/>
        </div>
    )
}

export default QuizContainer
