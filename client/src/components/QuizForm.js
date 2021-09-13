import React, {useEffect, useState} from 'react';
import Carnivore from '../styles/images/Carnivore.png'
import Herbivore from '../styles/images/Herbivore.png'
import Omnivore from '../styles/images/Omnivore.png'
import Score from "../components/Score";


        const QuizForm = ({allDinosaurs, answers, setValue, onSubmit}) => {


            const quizDinos = allDinosaurs.map((dino, index) => {
                return (
                    
                    <section style={{position: 'relative',textAlign: 'center', padding: 40}}>
                    <h4>{dino.nickname}</h4>
                    <div style={{position: 'relative',top: 0,bottom: 0,left: 0,right: 0}}>
                    <img style ={{width: 120,height: 120}} src={`../image/${dino.img}`} alt={dino.name}/>
                    </div>
                        <div className = "button">
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Carnivore`} name={`${dino.name}-Diet`} value="Carnivore" required/>
                        <label htmlFor={`${dino.name}-Diet`}><img src={Carnivore} width = "100" height="50"/></label>
                        </div>
        
                        <div className = "button">
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Omnivore`}  name={`${dino.name}-Diet`} value="Omnivore"/>
                        <label htmlFor={`${dino.name}-Diet`}><img src={Omnivore} width = "100" height="50"/></label>
                        </div>
        
                        <div className = "button">
                        <input onChange={(event)=> setValue(dino,event)} type="radio" id={`${dino.name}-Herbivore`} name={`${dino.name}-Diet`} value="Herbivore"/>
                        <label htmlFor={`${dino.name}-Diet`}><img src={Herbivore} width = "100" height="50"/></label>
                        </div>
                    </section> 
                )
            })
        
            return (
                <div>
                <form id="quiz" >
                    {quizDinos}
        
                </form>
                <div>
                
                </div>
                <button className="close" onClick={onSubmit}  id="save">Submit Guesses</button>
                </div>
            );
        }
        
        export default QuizForm
