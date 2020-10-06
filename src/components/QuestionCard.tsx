import React, { useState } from 'react';
import { getQuizData } from '../services/quizservice';
import {questionTypeProps} from './../types/quiz_type' 


const QuestionCard:React.FC<questionTypeProps> = ({ question, option, questionNum, totalQuestions, callback }) => {
    console.log(question, option)
    let [selectAns, setSelectAns] = useState("")

    const AnsSelector = (ev:any) => {
       // console.log(ev.target.value)
        setSelectAns(ev.target.value)
    }
    
    
    return(
        
        <div className='question-container'>
            <div className='question'>
            <h4>{questionNum}/{totalQuestions} :  {question} </h4> 

            </div>
            <form onSubmit = {(e:React.FormEvent<EventTarget>) =>callback(e, selectAns)} 
            className='question-form'>
                {
                    option.map((opt:string, ind: number)=>{
                        return(
                            <label className="radio">
                                <div>
                                <input type='radio'
                
                                        name='opt'
                                        required
                                        value={opt}
                                        checked={selectAns === opt}
                                        onChange={AnsSelector} />
                                        {opt}
                                        </div>
                            </label>
                        )
                    })
                }
                <input type='submit' className="submit" />
                 </form>
        </div>
    )
}

export default QuestionCard;