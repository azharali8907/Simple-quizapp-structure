import React, { useEffect, useState } from 'react';
import './App.css';
import {QuizType} from './types/quiz_type'
import {getQuizData} from './services/quizservice';
import QuestionCard from './components/QuestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([])
  let [step, setStep] = useState(0)
  let [score, setScore] = useState(0)

  useEffect(() => {
    async function fetchData(){
     const questions:QuizType[] = await getQuizData(5, "easy");
     console.log(questions);
     setQuiz(questions);
    }
    fetchData();
  },[]);

  const handleSubmit = (e:React.FormEvent<EventTarget>, userAns:string) => {
    e.preventDefault();
    
    const currentQuestion:QuizType = quiz[step];

    console.log("correct Answer "+ currentQuestion.correct_answer+ "User answre "+ userAns )
      if(userAns === currentQuestion.correct_answer){
        setScore(++score);
      }

    if(step !== quiz.length-1)
    setStep(++step);
    else {
      alert("Your Final Score is: " + score + " Out Of " + quiz.length);
      setStep(0)
      setScore(0)
    }
  }

  if(!quiz.length)
    return <h3>Looding...</h3>

  return (
    <div className="App">
     <QuestionCard
     option={quiz[step].option}
    question={quiz[step].question}
    callback={handleSubmit} /> 
    </div>
  );
}

export default App;
