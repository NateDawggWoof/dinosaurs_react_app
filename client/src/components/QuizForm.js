import React, {useEffect, useState} from 'react';
import Carnivore from '../styles/images/Carnivore.png'
import Herbivore from '../styles/images/Herbivore.png'
import Omnivore from '../styles/images/Omnivore.png'


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
        
            const quizDinos = allDinosaurs.map((dino, index) => {
                return (
                    
                    <div style={{position: 'relative',textAlign: 'center', padding: 40}}>
                    <h4>{dino.nickname}</h4>
                    <div style={{position: 'relative',top: 0,bottom: 0,left: 0,right: 0}}>
                    <img style ={{width: 90,height: 90}} src={`../image/${dino.img}`} alt={dino.name}/>
                    
                
                    </div>
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Carnivore`} name={`${dino.name}-Diet`} value="Carnivore" required/>
                        <label htmlFor={`${dino.name}-Diet`}><img src={Carnivore} width = "80" height="40"/></label>
        
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Omnivore`}  name={`${dino.name}-Diet`} value="Omnivore"/>
                        <label htmlFor={`${dino.name}-Diet`}><img src={Omnivore} width = "80" height="40"/></label>
        
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Herbivore`} name={`${dino.name}-Diet`} value="Herbivore"/>
                        <label htmlFor={`${dino.name}-Diet`}><img src={Herbivore} width = "80" height="40"/></label>
                    </div> 
                )
            })
        
            return (
                <div>
                <form id="quiz" >
                    {quizDinos}
        
                </form>
                <div>
                
                </div>
                <button onClick={onSubmit}  id="save">Submit Guesses</button>
                </div>
            );
        }
        
        export default QuizForm
