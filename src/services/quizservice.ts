import { QuizType, QuestionType } from "./../types/quiz_type";    


const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizData = async (totalQuestions: number, level: string) : Promise<QuizType[]> => {

    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let {results} = await res.json();
    const quiz: QuizType[] = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer:questionObj.correct_answer,
            option: questionObj.incorrect_answers.concat(questionObj.correct_answer)
          //  correct_answer: questionObj.correct_answer,
        }
    })
    return quiz;
}
