import React,{useState} from 'react'
import "../../styles/QuestionCompOne.css"
import { Link } from 'react-router-dom';
const QuestionCompOne = () => {
    const questions = [
		{
			questionText: 'Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?"',
			answerOptions: [
				{ answerText: 'Transformers', isCorrect: false },
				{ answerText: 'Care Bears', isCorrect: false },
				{ answerText: ' Cabbage Patch Kids', isCorrect: true },
				{ answerText: 'Rubik&rsquo;s Cube	', isCorrect: false },
			],
		},
		{
			questionText: 'What does a funambulist walk on?',
			answerOptions: [
				{ answerText: 'Broken Glass', isCorrect: false },
				{ answerText: 'A Tight Rope', isCorrect: true },
				{ answerText: 'Balls', isCorrect: false },
				{ answerText: 'The Moon', isCorrect: false },
			],
		},
	{
			questionText: 'How would one say goodbye in Spanish?',
			answerOptions: [
				{ answerText: 'Hola', isCorrect: false },
				{ answerText: 'Au Revoir', isCorrect: false },
				{ answerText: 'Adi&oacute;s', isCorrect: true },
				{ answerText: 'Salir', isCorrect: false },
			],
		},
{
			questionText: 'On a dartboard, what number is directly opposite No. 1?',
			answerOptions: [
				{ answerText: '20', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: '15', isCorrect: false },
				{ answerText: '19', isCorrect: true },
			],
		},
{
			questionText: 'What is the shape of the toy invented by Hungarian professor Ernő Rubik?',
			answerOptions: [
				{ answerText: 'Sphere', isCorrect: false },
				{ answerText: 'Cube', isCorrect: true },
				{ answerText: 'Cylinder', isCorrect: false },
				{ answerText: 'Pyramid', isCorrect: false },
			],
		},
{
			questionText: 'What is the name of the Jewish New Year?',
			answerOptions: [
				{ answerText: 'Elul', isCorrect: false },
				{ answerText: 'New Year', isCorrect: false },
				{ answerText: 'Rosh Hashanah', isCorrect: true },
				{ answerText: 'Succoss', isCorrect: false },
			],
		},
{
			questionText: 'Which one of the following rhythm games was made by Harmonix?',
			answerOptions: [
				{ answerText: 'Meat Beat Mania', isCorrect: false },
				{ answerText: 'Rock Band', isCorrect: true },
				{ answerText: 'Guitar Hero Live', isCorrect: false },
				{ answerText: 'Dance Dance Revolution', isCorrect: false },
			],
		},
{
			questionText: 'How many colors are there in a rainbow?',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
{
			questionText: 'Red Vines is a brand of what type of candy?',
			answerOptions: [
				{ answerText: 'Lollipop', isCorrect: false },
				{ answerText: 'Chocolate', isCorrect: false },
				{ answerText: 'Licorice', isCorrect: true },
				{ answerText: 'Bubblegum', isCorrect: false },
			],
		},
{
			questionText: 'What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?',
			answerOptions: [
				{ answerText: 'Noah&#039;s Ark', isCorrect: false },
				{ answerText: 'Spruce Goose', isCorrect: true },
				{ answerText: 'Fat Man', isCorrect: false },
				{ answerText: 'Trojan Horse', isCorrect: false },
			],
		},	
		{
			questionText: 'Which of these colours is NOT featured in the logo for Google?',
			answerOptions: [
				{ answerText: 'Pink', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},{
			questionText: 'What is the Spanish word for &quot;donkey&quot;?',
			answerOptions: [
				{ answerText: 'Caballo', isCorrect: false },
				{ answerText: 'Toro', isCorrect: false },
				{ answerText: 'Burro', isCorrect: true },
				{ answerText: 'Perro', isCorrect: false },
			],
		},{
			questionText: 'What is the French word for &quot;hat&quot;?',
			answerOptions: [
				{ answerText: 'Bonnet', isCorrect: false },
				{ answerText: '&Eacute;charpe', isCorrect: false },
				{ answerText: 'Casque', isCorrect: false },
				{ answerText: 'Chapeau', isCorrect: true },
			],
		},{
			questionText: 'What do the letters in the GMT time zone stand for?',
			answerOptions: [
				{ answerText: 'Global Meridian Time', isCorrect: false },
				{ answerText: 'Greenwich Mean Time', isCorrect: true },
				{ answerText: 'General Median Time', isCorrect: false },
				{ answerText: 'Glasgow Man Time	', isCorrect: false },
			],
		},{
			questionText: 'Which one of these is not a typical European sword design',
			answerOptions: [
				{ answerText: 'Anheuser Busch', isCorrect: false },
				{ answerText: 'Boston Beer Company', isCorrect: false },
				{ answerText: 'Miller Coors', isCorrect: false },
				{ answerText: 'D. G. Yuengling and Son, Inc', isCorrect: true },
			],
		},{
			questionText: 'Which one of these is not a typical European sword design',
			answerOptions: [
				{ answerText: 'Anheuser Busch', isCorrect: false },
				{ answerText: 'Boston Beer Company', isCorrect: false },
				{ answerText: 'D. G. Yuengling and Son, Inc', isCorrect: true },
				{ answerText: 'Miller Coors', isCorrect: false },
			],
		},{
			questionText: 'What do the letters of the fast food chain KFC stand for?',
			answerOptions: [
				{ answerText: 'Kentucky Fresh Cheese', isCorrect: false },
				{ answerText: 'Kibbled Freaky Cow', isCorrect: false },
				{ answerText: 'Kiwi Food Cut', isCorrect: false },
				{ answerText: 'Kentucky Fried Chicken', isCorrect: true },
			],
		},{
			questionText: 'Which restaurant&#039;s mascot is a clown?',
			answerOptions: [
				{ answerText: 'Whataburger', isCorrect: false },
				{ answerText: 'McDonald&#039;s', isCorrect: true },
				{ answerText: 'Burger King', isCorrect: false },
				{ answerText: 'Sonic', isCorrect: false },
			],
		},			{questionText: 'What was the first ever London Underground line to be built?',
		answerOptions: [
			{ answerText: 'Metropolitan Line', isCorrect: true },
			{ answerText: 'Circle Line', isCorrect: false },
			{ answerText: 'Bakerloo Line	', isCorrect: false },
			{ answerText: 'Victoria Line', isCorrect: false },
		],
	},{
		questionText: 'How tall is the Burj Khalifa?',
		answerOptions: [
			{ answerText: '2,717 ft', isCorrect: false },
			{ answerText: '2,546 ft', isCorrect: false },
			{ answerText: '2,722 ft', isCorrect: true },
			{ answerText: '3,024 ft', isCorrect: false },
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
             <Link to='/films' className='text-decoration-none' >Entertainment Films	</Link>
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

export default QuestionCompOne