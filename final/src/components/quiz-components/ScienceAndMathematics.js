import React ,{useState} from 'react'
import "../../styles/QuestionCompOne.css"
import {Link} from 'react-router-dom'
const ScienceAndMathematics = () => {
    const questions = [
		{
			questionText: 'Which of these is NOT a city in India?',
			answerOptions: [
				{ answerText: 'Hyderabad', isCorrect: false },
				{ answerText: ' Ahmedabad', isCorrect: false },
				{ answerText: 'Islamabad', isCorrect: true },
				{ answerText: 'Ghaziabad	', isCorrect: false },
			],
		},{
			questionText: 'What year is on the flag of the US state Wisconsin?',
			answerOptions: [
				{ answerText: '1634', isCorrect: false },
				{ answerText: ' 1783', isCorrect: false },
				{ answerText: '1848', isCorrect: true },
				{ answerText: '1901	', isCorrect: false },
			],
		},{
			questionText: 'How many countries border Kyrgyzstan?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: ' 1', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '6	', isCorrect: false },
			],
		},{
			questionText: 'Which is the largest freshwater lake in the world?',
			answerOptions: [
				{ answerText: 'Caspian Sea', isCorrect: false },
				{ answerText: ' Lake Michigan', isCorrect: false },
				{ answerText: 'Lake Superior', isCorrect: true },
				{ answerText: 'Lake Huron	', isCorrect: false },
			],
		},{
			questionText: 'Where is the fast food chain &quot;Panda Express&quot; headquartered?',
			answerOptions: [
				{ answerText: 'Sacramento, California', isCorrect: false },
				{ answerText: ' Fresno, California', isCorrect: false },
				{ answerText: 'Rosemead, California', isCorrect: true },
				{ answerText: 'San Diego, California	', isCorrect: false },
			],
		},{
			questionText: 'Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch is located on which Welsh island?',
			answerOptions: [
				{ answerText: 'Barry', isCorrect: false },
				{ answerText: ' Bardsey', isCorrect: false },
				{ answerText: 'Anglesey', isCorrect: true },
				{ answerText: 'Caldey	', isCorrect: false },
			],
		},{
			questionText: 'The Hunua Ranges is located in...',
			answerOptions: [
				{ answerText: 'Nepal', isCorrect: false },
				{ answerText: ' China', isCorrect: false },
				{ answerText: 'New Zealand', isCorrect: true },
				{ answerText: 'Mexico	', isCorrect: false },
			],
		},{
			questionText: 'Fucking is a village in which country?',
			answerOptions: [
				{ answerText: 'Germany', isCorrect: false },
				{ answerText: ' Switzerland', isCorrect: false },
				{ answerText: 'Austria', isCorrect: true },
				{ answerText: 'Czech Republic	', isCorrect: false },
			],
		},{
			questionText: 'What is the most populous Muslim-majority nation in 2010?',
			answerOptions: [
				{ answerText: 'Saudi Arabia', isCorrect: false },
				{ answerText: ' Iran', isCorrect: false },
				{ answerText: 'Indonesia', isCorrect: true },
				{ answerText: 'Sudan	', isCorrect: false },
			],
		},{
			questionText: 'Which country was NOT formerly part of Yugoslavia?',
			answerOptions: [
				{ answerText: 'Albania', isCorrect: false },
				{ answerText: ' Croatia', isCorrect: false },
				{ answerText: 'Serbia', isCorrect: true },
				{ answerText: 'Macedonia	', isCorrect: false },
			],
		},{
			questionText: 'What is the Finnish word for &quot;Finland&quot;?',
			answerOptions: [
				{ answerText: 'Eesti', isCorrect: false },
				{ answerText: ' Magyarorsz', isCorrect: false },
				{ answerText: 'Suomi', isCorrect: true },
				{ answerText: 'Sverige	', isCorrect: false },
			],
		},{
			questionText: 'What is the name of the Canadian national anthem?',
			answerOptions: [
				{ answerText: 'O Red Maple', isCorrect: false },
				{ answerText: ' Leaf-Spangled Banner', isCorrect: false },
				{ answerText: 'O Canada', isCorrect: true },
				{ answerText: 'March of the Puck Drop	', isCorrect: false },
			],
		},{
			questionText: 'What is the name of rocky region that spans most of eastern Canada?',
			answerOptions: [
				{ answerText: 'Rocky Mountains', isCorrect: false },
				{ answerText: ' Appalachian Mountains', isCorrect: false },
				{ answerText: 'Canadian Shield', isCorrect: true },
				{ answerText: 'Himalayas	', isCorrect: false },
			],
		},{
			questionText: 'What is the second-largest city in Lithuania?',
			answerOptions: [
				{ answerText: 'Panevėžys', isCorrect: false },
				{ answerText: ' Vilnius', isCorrect: false },
				{ answerText: 'Kaunas', isCorrect: true },
				{ answerText: 'Klaipėda	', isCorrect: false },
			],
		},{
			questionText: 'What is the land connecting North America and South America?',
			answerOptions: [
				{ answerText: 'Isthmus of Suez', isCorrect: false },
				{ answerText: ' Urals', isCorrect: false },
				{ answerText: 'Isthmus of Panama', isCorrect: true },
				{ answerText: 'Australasia	', isCorrect: false },
			],
		},{
			questionText: 'How many stations does the Central Line have on the London Underground?',
			answerOptions: [
				{ answerText: '51', isCorrect: false },
				{ answerText: ' 43', isCorrect: false },
				{ answerText: '49', isCorrect: true },
				{ answerText: '55	', isCorrect: false },
			],
		},{
			questionText: 'The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?',
			answerOptions: [
				{ answerText: 'Bird', isCorrect: false },
				{ answerText: ' Sickle', isCorrect: false },
				{ answerText: 'Crown', isCorrect: true },
				{ answerText: 'Tree	', isCorrect: false },
			],
		},{
			questionText: 'The Maluku islands (informally known as the Spice Islands) belong to which country?',
			answerOptions: [
				{ answerText: 'Chile', isCorrect: false },
				{ answerText: ' New Zealand ', isCorrect: false },
				{ answerText: 'Indonesia', isCorrect: true },
				{ answerText: 'Fiji	', isCorrect: false },
			],
		},{
			questionText: 'What national museum will you find in Cooperstown, New York?',
			answerOptions: [
				{ answerText: 'Metropolitan Museum of Art', isCorrect: false },
				{ answerText: ' National Toy Hall of Fame', isCorrect: false },
				{ answerText: 'National Baseball Hall of Fame', isCorrect: true },
				{ answerText: 'Museum of Modern Art	', isCorrect: false },
			],
		},{
			questionText: 'Which of these cities is NOT in England?',
			answerOptions: [
				{ answerText: 'Oxford', isCorrect: false },
				{ answerText: ' Manchester', isCorrect: false },
				{ answerText: 'Edinburgh', isCorrect: true },
				{ answerText: 'Southampton	', isCorrect: false },
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
export default ScienceAndMathematics