import React ,{useState} from 'react'
import "../../styles/QuestionCompOne.css"
import {Link} from 'react-router-dom'
const BooksQuiz = () => {
    const questions = [
		{
			questionText: 'Which of the following authors was not born in England?',
			answerOptions: [
				{ answerText: 'Graham Greene', isCorrect: false },
				{ answerText: ' G Wells', isCorrect: false },
				{ answerText: 'Arthur Conan Doyle', isCorrect: true },
				{ answerText: 'Arthur C Clarke	', isCorrect: false },
			],
		},
        {
			questionText: 'Who wrote the &quot;A Song of Ice And Fire&quot; fantasy novel series?',
			answerOptions: [
				{ answerText: 'George Lucas', isCorrect: false },
				{ answerText: 'George Orwell', isCorrect: false },
				{ answerText: 'George R. R. Martin', isCorrect: true },
				{ answerText: 'George Eliot	', isCorrect: false },
			],
		},{
			questionText: 'Who wrote the 1967 horror novel &quot;Rosemary&#039;s Baby&quot;?',
			answerOptions: [
				{ answerText: 'Ira Levin', isCorrect: false },
				{ answerText: 'Stephen King', isCorrect: false },
				{ answerText: 'Robert Bloch', isCorrect: true },
				{ answerText: 'Mary Shelley	', isCorrect: false },
			],
		},{
			questionText: 'In the Lord of the Rings, who is the father of the dwarf Gimli?',
			answerOptions: [
				{ answerText: 'Gloin', isCorrect: true },
				{ answerText: 'Bombur', isCorrect: false },
				{ answerText: 'Thorin Oakenshield', isCorrect: false },
				{ answerText: 'Dwalin	', isCorrect: false },
			],
		},{
			questionText: 'one',
			answerOptions: [
				{ answerText: 'one', isCorrect: false },
				{ answerText: 'one', isCorrect: false },
				{ answerText: 'one', isCorrect: true },
				{ answerText: 'one	', isCorrect: false },
			],
		},{
			questionText: 'What position does Harry Potter play in Quidditch?',
			answerOptions: [
				{ answerText: 'Beater', isCorrect: false },
				{ answerText: 'Chaser', isCorrect: false },
				{ answerText: 'Seeker', isCorrect: true },
				{ answerText: 'Keeper	', isCorrect: false },
			],
		},{
			questionText: 'By what nickname is Jack Dawkins known in the Charles Dickens novel, &#039;Oliver Twist&#039;?',
			answerOptions: [
				{ answerText: 'The Artful Dodger', isCorrect: false },
				{ answerText: 'Fagin', isCorrect: false },
				{ answerText: 'Bull&rsquo;s-eye', isCorrect: true },
				{ answerText: 'Mr. Fang	', isCorrect: false },
			],
		},{
			questionText: 'What was the name of the Mysterious Island, in Jules Verne&#039;s &quot;The Mysterious Island&quot;?',
			answerOptions: [
				{ answerText: 'Vulcania Island', isCorrect: false },
				{ answerText: 'Prometheus Island', isCorrect: false },
				{ answerText: 'Lincoln Island', isCorrect: true },
				{ answerText: 'Neptune Island	', isCorrect: false },
			],
		},{
			questionText: 'By what name was the author Eric Blair better known?',
			answerOptions: [
				{ answerText: 'George Orwell', isCorrect: true },
				{ answerText: 'Aldous Huxley', isCorrect: false },
				{ answerText: 'Ernest Hemingway', isCorrect: false },
				{ answerText: 'Ray Bradbury	', isCorrect: false },
			],
		},{
			questionText: 'The novel &quot;Of Mice And Men&quot; was written by what author?',
			answerOptions: [
				{ answerText: 'George Orwell', isCorrect: false },
				{ answerText: 'Mark Twain', isCorrect: false },
				{ answerText: 'John Steinbeck', isCorrect: true },
				{ answerText: 'Harper Lee	', isCorrect: false },
			],
		},{
			questionText: 'J.K. Rowling completed &quot;Harry Potter and the Deathly Hallows&quot; in which hotel in Edinburgh, Scotland?',
			answerOptions: [
				{ answerText: 'The Dunstane Hotel', isCorrect: false },
				{ answerText: 'Hotel Novotel', isCorrect: false },
				{ answerText: 'The Balmoral', isCorrect: true },
				{ answerText: 'Sheraton Grand Hotel &amp; Spa	', isCorrect: false },
			],
		},{
			questionText: 'In the novel &quot;Lord of the Rings&quot;, how many rings of power were given to the race of man?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '11', isCorrect: false },
				{ answerText: '9', isCorrect: true },
				{ answerText: '13	', isCorrect: false },
			],
		},{
			questionText: 'In the &quot;Harry Potter&quot; novels, what must a Hogwarts student do to enter the Ravenclaw Common Room?',
			answerOptions: [
				{ answerText: 'Answer a riddle', isCorrect: false },
				{ answerText: 'Rhythmically tap barrels with a wand', isCorrect: false },
				{ answerText: 'Speak a password', isCorrect: true },
				{ answerText: 'Knock in sequence	', isCorrect: false },
			],
		},{
			questionText: 'What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?',
			answerOptions: [
				{ answerText: 'The Outsiders', isCorrect: false },
				{ answerText: 'The Mafia', isCorrect: false },
				{ answerText: 'The Greasers', isCorrect: true },
				{ answerText: 'The Socs	', isCorrect: false },
			],
		},{
			questionText: 'The book &quot;Fahrenheit 451&quot; was written by whom?',
			answerOptions: [
				{ answerText: 'R. L. Stine', isCorrect: false },
				{ answerText: 'Ray Bradbury', isCorrect: true },
				{ answerText: 'Wolfgang Amadeus Mozart', isCorrect: false },
				{ answerText: 'Stephen King	', isCorrect: false },
			],
		},{
			questionText: 'What is the make and model of the tour vehicles in &quot;Jurassic Park&quot; (1990)?',
			answerOptions: [
				{ answerText: '1989 Toyota Land Cruiser', isCorrect: true },
				{ answerText: '1989 Jeep Wrangler YJ Sahar', isCorrect: false },
				{ answerText: '1989 Ford Explorer XLT', isCorrect: false },
				{ answerText: 'Mercedes M-Class	', isCorrect: false },
			],
		},{
			questionText: 'Which novel by John Grisham was conceived on a road trip to Florida while thinking about stolen books with his wife?',
			answerOptions: [
				{ answerText: 'Camino Island', isCorrect: false },
				{ answerText: 'Rogue Lawyer', isCorrect: false },
				{ answerText: 'Gray Mountain', isCorrect: true },
				{ answerText: 'The Litigators	', isCorrect: false },
			],
		},{
			questionText: 'What book series published by Jim Butcher follows a wizard in modern day Chicago?',
			answerOptions: [
				{ answerText: 'A Hat in Time', isCorrect: false },
				{ answerText: 'The Cinder Spires', isCorrect: false },
				{ answerText: 'The Dresden Files', isCorrect: true },
				{ answerText: 'My Life as a Teenage Wizard	', isCorrect: false },
			],
		},{
			questionText: 'In Terry Pratchett&#039;s Discworld novel &#039;Wyrd Sisters&#039;, which of these are not one of the three main witches?',
			answerOptions: [
				{ answerText: 'Winny Hathersham', isCorrect: false },
				{ answerText: 'Granny Weatherwax', isCorrect: false },
				{ answerText: 'Nanny Ogg', isCorrect: true },
				{ answerText: 'Magrat Garlick	', isCorrect: false },
			],
		},{
			questionText: 'Who is the author of the series &quot;Malazan Book of the Fallen&quot;?',
			answerOptions: [
				{ answerText: 'Steven Erikson', isCorrect: false },
				{ answerText: 'Ian Cameron Esslemont', isCorrect: false },
				{ answerText: 'George R. R. Martin', isCorrect: true },
				{ answerText: 'J. R. R. Tolkien	', isCorrect: false },
			],
		},
		
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='questions'>
		<div className='question-comp'>
			{showScore ? (
				<div className='score-section'>
                <p className='result '>Your Result</p>
                <p className='' >Your IQ is {score / 20*100}  </p>
                <p className=''>In this test You have answered {score} correct answers from  {questions.length} </p>
             <div className=''>
             <h3 className='mt-3 mb-4'  >Books Quiz</h3>
             <p className='mt-3 mb-3' >Play Popular Quizs online without instalation</p>
             <div className='return-links'>
             <Link to='/general-knowledge' className='text-decoration-none' >General Knowledge</Link>
             <button className='slide-btn'><Link to='/quiz-home' className='text-decoration-none' >Back To Quiz home</Link></button>
            </div>
            <div className='share'>
            <strong className='pb-2 pt-1'>Share Result</strong>
            <ul className='share-icons'>
            <li ><a href="https://whatsapp.com" target='_blank'><i className="fa-brands fa-whatsapp"></i></a> </li>
            <li ><a href="https://twitter.com" target='_blank'><i className="fa-brands fa-twitter"></i></a> </li>
            <li ><a href="https://facebook.com" target='_blank'><i className="fa-brands fa-facebook"></i></a> </li>
            <li ><a href="https://telegram.com" target='_blank'><i className="fa-brands fa-telegram"></i></a> </li>
            <li ><a href="https://pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></a> </li>
            
            </ul>
            </div>
             </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}
export default BooksQuiz