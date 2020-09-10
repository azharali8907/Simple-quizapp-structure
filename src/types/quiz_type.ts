import { type } from "os";

export type QuestionType = {
    category: string
correct_answer: string
difficulty: string
incorrect_answers: string[]
question: string
type: string
}

export type QuizType = {
    question: string
    answer: string
    option: string[]
    correct_answer: string
}

export type questionTypeProps = {
    question: string
    option: string[]
    callback: (e:React.FormEvent<EventTarget>, ans:string)=>void
}