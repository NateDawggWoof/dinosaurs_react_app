import React, {useState} from "react";
import QuizForm from "../components/QuizForm";

const QuizContainer = ({allDinosaurs}) => {
    const [answers, setAnswers] = useState({})

    const getAnswers = allDinosaurs.reduce((acc, dino)=>{
        acc[dino.name]=dino.diet;
        return acc;
    }, {} )

    useEffect(() => {
        setAnswers(getAnswers)
      },[])

      useEffect(()=>{
        setAnswers(allDinosaurs.reduce((acc, dino)=>{
            acc[dino.name]=dino.diet;
            return acc;
        }, {} ))
    },[allDinosaurs])











    return (
        <div style={{position: 'relative',textAlign: 'center', padding: 40}}>
            <h1> Dino Quiz</h1>
            <QuizForm allDinosaurs={allDinosaurs} answers={answers}/>
        </div>
    )
}

export default QuizContainer
