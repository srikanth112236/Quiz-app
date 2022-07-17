import React ,{useState} from 'react'
import "../../styles/QuestionCompOne.css"
import {Link} from 'react-router-dom'
const CelebritiesQuiz = () => {
    const questions = [
		{
			questionText: 'How many times did Martina Navratilova win the Wimbledon Singles Championship?',
			answerOptions: [
				{ answerText: 'Ten', isCorrect: false },
				{ answerText: ' Eight', isCorrect: false },
				{ answerText: 'Nine ', isCorrect: true },
				{ answerText: 'Seven	', isCorrect: false },
			],
		},{
			questionText: 'What tool lends it&#039;s name to a last-stone advantage in an end in Curling?',
			answerOptions: [
				{ answerText: 'Wrench', isCorrect: false },
				{ answerText: ' Drill', isCorrect: false },
				{ answerText: 'Hammer', isCorrect: true },
				{ answerText: 'Screwdriver	', isCorrect: false },
			],
		},{
			questionText: 'With which doubles partner did John McEnroe have most success?',
			answerOptions: [
				{ answerText: 'Mark Woodforde', isCorrect: false },
				{ answerText: ' Michael Stich', isCorrect: false },
				{ answerText: 'Peter Fleming', isCorrect: true },
				{ answerText: 'Mary Carillo	', isCorrect: false },
			],
		},{
			questionText: 'Where was the Games of the XXII Olympiad held?',
			answerOptions: [
				{ answerText: 'Barcelona', isCorrect: false },
				{ answerText: ' Tokyo', isCorrect: false },
				{ answerText: 'Moscow', isCorrect: true },
				{ answerText: 'Los Angeles	', isCorrect: false },
			],
		},{
			questionText: 'Which car company is the only Japanese company which won the 24 Hours of Le Mans?',
			answerOptions: [
				{ answerText: 'Toyotaq', isCorrect: false },
				{ answerText: ' Subaru', isCorrect: false },
				{ answerText: 'Mazda', isCorrect: true },
				{ answerText: 'Nissan	', isCorrect: false },
			],
		},{
			questionText: 'Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?',
			answerOptions: [
				{ answerText: 'Insigne', isCorrect: false },
				{ answerText: ' Barzagli', isCorrect: false },
				{ answerText: 'Pelle', isCorrect: true },
				{ answerText: 'Giaccherini	', isCorrect: false },
			],
		},{
			questionText: 'Which male player won the gold medal of table tennis singles in 2016 Olympics Games?',
			answerOptions: [
				{ answerText: 'Zhang Jike (China)', isCorrect: false },
				{ answerText: ' Jun Mizutani (Japan)', isCorrect: false },
				{ answerText: 'Ma Long (China)', isCorrect: true },
				{ answerText: 'Vladimir Samsonov (Belarus)	', isCorrect: false },
			],
		},{
			questionText: 'Which female player won the gold medal of table tennis singles in 2016 Olympics Games?',
			answerOptions: [
				{ answerText: 'LI Xiaoxia (China)', isCorrect: false },
				{ answerText: ' Ai FUKUHARA (Japan)', isCorrect: false },
				{ answerText: 'DING Ning (China)', isCorrect: true },
				{ answerText: 'Song KIM (North Korea)	', isCorrect: false },
			],
		},{
			questionText: 'What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?',
			answerOptions: [
				{ answerText: 'Cristiano Ronaldo los Santos Diego', isCorrect: false },
				{ answerText: ' Cristiano Armando Diego Ronaldo', isCorrect: false },
				{ answerText: 'Cristiano Ronaldo dos Santos Aveiro', isCorrect: true },
				{ answerText: 'Cristiano Luis Armando Ronaldo	', isCorrect: false },
			],
		},{
			questionText: 'Which year was the third Super Bowl held?',
			answerOptions: [
				{ answerText: 'one', isCorrect: false },
				{ answerText: ' one', isCorrect: false },
				{ answerText: 'one', isCorrect: true },
				{ answerText: 'one	', isCorrect: false },
			],
		},{
			questionText: 'one',
			answerOptions: [
				{ answerText: '1968', isCorrect: false },
				{ answerText: ' 1971', isCorrect: false },
				{ answerText: '1969', isCorrect: true },
				{ answerText: '1970	', isCorrect: false },
			],
		},{
			questionText: 'What team did England beat in the semi-final stage to win in the 1966 World Cup final?',
			answerOptions: [
				{ answerText: 'West Germany', isCorrect: false },
				{ answerText: ' Soviet Union', isCorrect: false },
				{ answerText: 'Portugal', isCorrect: true },
				{ answerText: 'Brazil	', isCorrect: false },
			],
		},{
			questionText: 'Which city features all of their professional sports teams&#039; jersey&#039;s with the same color scheme?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: ' Seattle', isCorrect: false },
				{ answerText: 'Pittsburgh', isCorrect: true },
				{ answerText: 'Tampa Bay	', isCorrect: false },
			],
		},{
			questionText: 'Which player &quot;kung-fu kicked&quot; a Crystal Palace fan in January 1995?',
			answerOptions: [
				{ answerText: 'David Seamen', isCorrect: false },
				{ answerText: ' Ashley Cole', isCorrect: false },
				{ answerText: 'Eric Cantona', isCorrect: true },
				{ answerText: 'Mark Hughes	', isCorrect: false },
			],
		},{
			questionText: 'Who is Manchester United&#039;s leading appearance maker?',
			answerOptions: [
				{ answerText: 'David Beckham', isCorrect: false },
				{ answerText: ' Wayne Rooney', isCorrect: false },
				{ answerText: 'Ryan Giggs', isCorrect: true },
				{ answerText: 'Eric Cantona	', isCorrect: false },
			],
		},{
			questionText: 'The Mazda 787B won the 24 Hours of Le Mans in what year?',
			answerOptions: [
				{ answerText: '1990', isCorrect: false },
				{ answerText: ' 2000', isCorrect: false },
				{ answerText: '1991', isCorrect: true },
				{ answerText: '1987	', isCorrect: false },
			],
		},{
			questionText: 'What is &ldquo;The Sport of Kings&rdquo;?',
			answerOptions: [
				{ answerText: 'Chess', isCorrect: false },
				{ answerText: ' Jousting', isCorrect: false },
				{ answerText: 'Horse Racing', isCorrect: true },
				{ answerText: 'Fencing	', isCorrect: false },
			],
		},{
			questionText: 'Which of these Russian cities did NOT contain a stadium that was used in the 2018 FIFA World Cup?',
			answerOptions: [
				{ answerText: 'Rostov-on-Don', isCorrect: false },
				{ answerText: ' Yekaterinburg', isCorrect: false },
				{ answerText: 'Vladivostok', isCorrect: true },
				{ answerText: 'Kaliningrad	', isCorrect: false },
			],
		},{
			questionText: 'In Canadian football, scoring a rouge is worth how many points?',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: ' 3', isCorrect: false },
				{ answerText: '1', isCorrect: true },
				{ answerText: '2	', isCorrect: false },
			],
		},{
			questionText: 'The AHL affiliate team of the Boston Bruins is named what?',
			answerOptions: [
				{ answerText: 'New Haven Bruins', isCorrect: false },
				{ answerText: ' Cambridge Bruins', isCorrect: false },
				{ answerText: 'Providence Bruins', isCorrect: true },
				{ answerText: 'Hartford Bruins	', isCorrect: false },
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
             <Link to='/films' className='text-decoration-none' >Entertainment Films</Link>
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
export default CelebritiesQuiz