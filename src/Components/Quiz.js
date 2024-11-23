import { useState } from 'react';
import './Quiz.css';
import { data } from '../assets/data';



function Quiz() {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index])

    const onClick = () => {
        setIndex(++index);
        setQuestion(data[index]);
    }

    return(
        <div className = 'quizCardContainer'>
            <h1>Quiz App</h1>
            <h2>{index+1}. {question.question}</h2>
            <ul >
                <li className='answerChoices'>{question.option1}</li>
                <li className='answerChoices'>{question.option2}</li>
                <li className='answerChoices'>{question.option3}</li>
                <li className='answerChoices'>{question.option4}</li>
            </ul>
            <button className='nextButton' onClick={onClick}>Next</button>
            <div className='containerIndex'>{index+1} of {data.length}</div>
        </div>
    )
}

export default Quiz