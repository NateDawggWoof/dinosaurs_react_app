
    // const [quizSelection, setQuizSelection] = useState([])
    //     const onChange = () => {
    //         if (value === dino.diet) {
    //         return setQuizSelection(quizSelection)}
    //     }
    
    //     const onSubmit = () => {
    //         return quizSelection.map((index) => {
    //             return <Score result={result} key={index}/>
    //         })
    //     }

        import React, {useEffect, useState} from 'react';

        const QuizForm = ({allDinosaurs}) => {
        
            const getAnswers = allDinosaurs.reduce((acc, dino)=>{
                acc[dino.name]=dino.diet;
                return acc;
            }, {} )
        
            // console.log('getAnswers', getAnswers)
        
            const [formData, setFormData] = useState({})
        
            const [answers, setAnswers] = useState({...getAnswers})
        
            useEffect(()=>{
                setAnswers(allDinosaurs.reduce((acc, dino)=>{
                    acc[dino.name]=dino.diet;
                    return acc;
                }, {} ))
            },[allDinosaurs])
        
            console.log('answers at start', answers)
        
            const [guesses, setGuesses] = useState({})
        
            const setValue = (dino,event) =>{
                setGuesses({...guesses,[dino.name]:event.target.value})
            }
        
            const quizAnswers = allDinosaurs.map((dino, index) => {
                return (dino.diet)
            })
        
            const onSubmit = () => {
                console.log('guesses', guesses)
                console.log('Answers', answers)
                console.log(allDinosaurs.filter((dino)=>{
                    return guesses[dino.name]===answers[dino.name]
                }).length)
        
            }
        
        
            // const anwsersQuiz = allDinosaurs.reduce((acc, dino)=>{
            //     acc[dino.name]=dino.diet
            //     return acc
            // }, {} )
        
        
            const quizDinos = allDinosaurs.map((dino, index) => {
                return (
                    <div style={{position: 'relative',textAlign: 'center', padding: 40}}>
                    <h4>{dino.nickname}</h4>
                    <div style={{position: 'relative',top: 0,bottom: 0,left: 0,right: 0}}>
                    <img style ={{width: 70,height: 70}} src={`../image/${dino.img}`} alt={dino.name}/>
                    
                    </div>
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Carnivore`} name={`${dino.name}-Diet`} value="Carnivore" required/>
                        <label htmlFor={`${dino.name}-Diet`}>Carnivore</label>
        
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Omnivore`}  name={`${dino.name}-Diet`} value="Omnivore"/>
                        <label htmlFor={`${dino.name}-Diet`}>Omnivore</label>
        
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Herbivore`} name={`${dino.name}-Diet`} value="Herbivore"/>
                        <label htmlFor={`${dino.name}-Diet`}>Herbivore</label>
                      
                    </div>
                )
            })
        
        
            return (
                <div>
                <form id="bookings-form" >
                    <h2>Add a Booking</h2>
                    {quizDinos}
        
                </form>
                <button onClick={onSubmit}  id="save">Submit Guesses</button>
                </div>
            );
        }
        
        export default QuizForm
