import React, {useState} from 'react';

const QuizForm = ({allDinosaurs}) => {

    const [formData, setFormData] = useState({})

    const onSubmit = 

    const quizDinos = allDinosaurs.map((dino, index) => {
        return (
            <div>
            {dino.name}
                <input type="radio" id="diet" name="diet" value="Carnivore" required/>
                <label htmlFor="diet">Carnivore</label>

                <input type="radio" id="diet" name="diet" value="Omnivore"/>
                <label htmlFor="diet">Omnivore</label>

                <input type="radio" id="diet" name="diet" value="Herbivore"/>
                <label htmlFor="diet">Herbivore</label>
            </div>
        )
    })


    return (
        <div>
        <form id="bookings-form" >
            <h2>Add a Booking</h2>
            {quizDinos}
            <input onSubmit = {onSubmit} type="submit" value="Check Score" id="save"/>
	    </form>
        </div>
    );
}

export default QuizForm
