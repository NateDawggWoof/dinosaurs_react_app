import React, {useEffect, useState} from "react";
import QuizForm from "../components/QuizForm";
import Score from "../components/Score";

const QuizContainer = ({allDinosaurs }) => {
    const [answers, setAnswers] = useState({})
    const [guesses, setGuesses] = useState({})
    const [score, setScore] = useState(0)
    const [popUpDisplay, setPopUpDisplay] = useState('off')
    
    console.log('answers at start', answers)

    const setValue = (dino,event) =>{
        setGuesses({...guesses,[dino.name]:event.target.value})
    }

    const getAnswers = allDinosaurs.reduce((acc, dino)=>{
        acc[dino.name]=dino.diet;
        return acc;
    }, {} )

    useEffect(()=>{
        setAnswers(getAnswers);
    },[allDinosaurs])


    //   useEffect(()=>{
    //     setAnswers(allDinosaurs.reduce((acc, dino)=>{
    //         acc[dino.name]=dino.diet;
    //         return acc;
    //     }, {} ))
    // },[allDinosaurs])

    const onSubmit = () => {
        console.log('guesses', guesses)
        console.log('Answers', answers)
        setScore(getScore)
        // console.log(allDinosaurs.filter((dino)=>{
        //     return guesses[dino.name]===answers[dino.name]
        // }).length)
        console.log(getScore)
        togglePopUp()

    }

    const getScore = allDinosaurs.filter((dino)=>{
        return guesses[dino.name]===answers[dino.name]
    }).length


    const togglePopUp = () => {
        if(popUpDisplay == 'off'){
            setPopUpDisplay('on')
        } else {
            setPopUpDisplay('off')
        }
        console.log('pop state' , popUpDisplay)
        showPopUp()

    }


    const showPopUp = () => {
        if (popUpDisplay =='off'){
            return <></>
        } else {
            return <Score score={score} />
        }
    }












    return (
        <div style={{position: 'relative',textAlign: 'center', padding: 40}}>
            <h1> Dino Quiz</h1>
            <QuizForm allDinosaurs={allDinosaurs} answers={answers} setValue ={setValue} onSubmit={onSubmit}/>
            <div id="quizPopUp">
            {showPopUp()}
            </div>
        </div>
    )
}

export default QuizContainer;
