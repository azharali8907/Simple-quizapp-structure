import React, { useEffect, useState} from 'react';
import './App.css';
import { QuizType } from './types/quiz_type'
import { getQuizData } from './services/quizservice';
import QuestionCard from './components/QuestionCard';
//import CountdownTimer from './components/Timer';
import CountTimer from './components/CountTimer'; 







const TOTAL_QUESTIONS = 10;

function App() {

  
  let [quiz, setQuiz] = useState<QuizType[]>([])
  let [step, setStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(true)



  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuizData(TOTAL_QUESTIONS, "easy");
      console.log(questions);
      setQuiz(questions);
      setShowResult(false);
      setScore(0);
      setStep(0);
    }
    fetchData();
  }, []);

  


  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: QuizType = quiz[step];

    console.log("correct Answer " + currentQuestion.correct_answer + "User answre " + userAns)
    if (userAns === currentQuestion.correct_answer) {
      setScore(++score);
    }

    if (step !== quiz.length - 1)
      setStep(++step);
    else {
      setShowResult(true);
    }
  }

  if (!quiz.length)
    return <h3>Looding...</h3>
    if(showResult){
      return (<div className="question-container result-container">
        <h2>Result</h2>
  
        <p className="result-text">
          You final score is 
            <b> {score}</b> out of <b>{quiz.length}</b>
        </p>
        <a href="App.tsx"><button>Restart</button></a>
      </div>)}

  return (
    
    <div className="App">
      <h1>Quiz App</h1>


      <p><CountTimer /> Counter</p>
     
      
        

      <p className=''>
          Score: {score}
        </p> 
        
      <QuestionCard
      questionNum={step + 1}
      totalQuestions={TOTAL_QUESTIONS}
        option={quiz[step].option}
        question={quiz[step].question}
        callback={handleSubmit} />
    </div>
  );
}

export default App;
