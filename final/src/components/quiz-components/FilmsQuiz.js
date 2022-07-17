import React ,{useState} from 'react'
import "../../styles/QuestionCompOne.css"
import {Link} from 'react-router-dom'
const FilmsQuiz = () => {
    const questions = [
		{
			questionText: 'Which was the first of Alfred Hitchcock&#039;s movies to be filmed in colour?',
			answerOptions: [
				{ answerText: 'Psycho', isCorrect: false },
				{ answerText: ' Vertigo', isCorrect: false },
				{ answerText: 'Rope', isCorrect: true },
				{ answerText: 'Rebecca	', isCorrect: false },
			],
		},{
			questionText: 'In the film &quot;Interstellar&quot;, how long did they spend on Miller&#039;s planet?',
			answerOptions: [
				{ answerText: '23 years, 4 months, and 8 days', isCorrect: false },
				{ answerText: ' 15 years, 2 months, and 15 days', isCorrect: false },
				{ answerText: '10 months and 6 days', isCorrect: true },
				{ answerText: '26 years, 4 months, and 10 days	', isCorrect: false },
			],
		},{
			questionText: 'In the 1976 film &#039;Taxi Driver&#039;, how many guns did Travis buy from the salesman?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: ' 6', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '1	', isCorrect: false },
			],
		},{
			questionText: 'What did Alfred Hitchcock use as blood in the film &quot;Psycho&quot;?',
			answerOptions: [
				{ answerText: 'Ketchup', isCorrect: false },
				{ answerText: ' Red food coloring', isCorrect: false },
				{ answerText: 'Chocolate syrup', isCorrect: true },
				{ answerText: 'Maple syrup	', isCorrect: false },
			],
		},{
			questionText: 'In 2012, which movie won every category in the 32nd &quot;Golden Raspberry Awards&quot;?',
			answerOptions: [
				{ answerText: 'Jack and Jill', isCorrect: true },
				{ answerText: ' The Girl with the Dragon Tattoo', isCorrect: false },
				{ answerText: 'Thor', isCorrect: false },
				{ answerText: 'The King&#039;s Speech	', isCorrect: false },
			],
		},{
			questionText: 'In what Disney movie can you spot the character &quot;Pac-Man&quot; in if you look closely enough in some scenes?',
			answerOptions: [
				{ answerText: 'Big Hero 6', isCorrect: false },
				{ answerText: ' Fantasia', isCorrect: false },
				{ answerText: 'Tron', isCorrect: true },
				{ answerText: 'Monsters, Inc.	', isCorrect: false },
			],
		},{
			questionText: 'In the movie &quot;Scream&quot; who is Ghost Face?',
			answerOptions: [
				{ answerText: 'Dewey Riley', isCorrect: false },
				{ answerText: ' Sidney Prescott', isCorrect: false },
				{ answerText: 'Billy Loomis and Stu Macher', isCorrect: true },
				{ answerText: 'Archie Prescott and Philip Marv	', isCorrect: false },
			],
		},{
			questionText: 'In order to cut costs, what were most of the extras of Mad Max (1979) paid with?',
			answerOptions: [
				{ answerText: 'Fast food', isCorrect: false },
				{ answerText: ' Food stamps', isCorrect: false },
				{ answerText: 'Beer', isCorrect: true },
				{ answerText: 'They weren&#039;t paid	', isCorrect: false },
			],
		},{
			questionText: 'In what year did Clint Eastwood star as Inspector Harry Callahan in the film &quot;Dirty Harry&quot;?',
			answerOptions: [
				{ answerText: '1975', isCorrect: false },
				{ answerText: ' 1983', isCorrect: false },
				{ answerText: '1971', isCorrect: true },
				{ answerText: '1969	', isCorrect: false },
			],
		},{
			questionText: 'Before &quot;Jurassic Park III&quot; was finalized and the Spinosaurus was chosen, which dinosaur was going to be the star?',
			answerOptions: [
				{ answerText: 'one', isCorrect: false },
				{ answerText: ' one', isCorrect: false },
				{ answerText: 'one', isCorrect: true },
				{ answerText: 'one	', isCorrect: false },
			],
		},{
			questionText: 'one',
			answerOptions: [
				{ answerText: 'Tyrannosaurus Rex', isCorrect: false },
				{ answerText: ' Velociraptor', isCorrect: false },
				{ answerText: 'Baryonyx', isCorrect: true },
				{ answerText: 'Suchomimus	', isCorrect: false },
			],
		},{
			questionText: 'In the &quot;Jurassic Park&quot; universe, what was the first dinosaur cloned by InGen in 1986?',
			answerOptions: [
				{ answerText: 'Triceratops', isCorrect: false },
				{ answerText: ' Troodon', isCorrect: false },
				{ answerText: 'Velociraptor', isCorrect: true },
				{ answerText: 'Brachiosaurus	', isCorrect: false },
			],
		},{
			questionText: 'What three movies, in order from release date, make up the &quot;Dollars Trilogy&quot;?',
			answerOptions: [
				{ answerText: '&quot;The Good, the Bad, and the Ugly&quot;, &quot;For A Few Dollars More&quot;, &quot;A Fistful of Dollars&quot;', isCorrect: false },
				{ answerText: ' &quot;For a Few Dollars More&quot;, &quot;The Good, the Bad, and the Ugly&quot;, &quot;A Fistful of Dollars&quot;', isCorrect: false },
				{ answerText: '&quot;A Fistful of Dollars&quot;, &quot;For a Few Dollars More&quot;, &quot;The Good, the Bad, and the Ugly&quot;', isCorrect: true },
				{ answerText: '&quot;For a Few Dollars More&quot;, &quot;A Fistful of Dollars&quot;, &quot;The Good, the Bad, and the Ugly&quot;	', isCorrect: false },
			],
		},{
			questionText: 'Which actors made up the trio in &quot;The Good, the Bad, and the Ugly&quot;?',
			answerOptions: [
				{ answerText: 'Sergio Leone, Ennio Morricone, and Tonino Delli Colli', isCorrect: false },
				{ answerText: ' Yul Brynner, Steve McQueen, and Charles Bronson', isCorrect: false },
				{ answerText: 'Clint Eastwood, Eli Wallach, and Lee Van Cleef', isCorrect: true },
				{ answerText: 'Aldo Giuffr&egrave;, Mario Brega, and Luigi Pistilli	', isCorrect: false },
			],
		},{
			questionText: 'Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?',
			answerOptions: [
				{ answerText: 'John', isCorrect: false },
				{ answerText: ' Will', isCorrect: false },
				{ answerText: 'Dave', isCorrect: true },
				{ answerText: 'Carl	', isCorrect: false },
			],
		},{
			questionText: 'Which sci-fi cult films plot concerns aliens attempting to prevent humans from creating a doomsday weapon?',
			answerOptions: [
				{ answerText: 'one', isCorrect: false },
				{ answerText: ' one', isCorrect: false },
				{ answerText: 'one', isCorrect: true },
				{ answerText: 'one	', isCorrect: false },
			],
		},{
			questionText: 'one',
			answerOptions: [
				{ answerText: 'The Man from Planet X', isCorrect: false },
				{ answerText: ' It Came from Outer Space', isCorrect: false },
				{ answerText: 'Plan 9 from Outer Space', isCorrect: true },
				{ answerText: 'The Day The Earth Stood Still	', isCorrect: false },
			],
		},{
			questionText: 'Which 1994 film did Roger Ebert famously despise, saying &quot;I hated hated hated hated hated this movie&quot;.',
			answerOptions: [
				{ answerText: '3 Ninjas Kick Back', isCorrect: false },
				{ answerText: ' The Santa Clause', isCorrect: false },
				{ answerText: 'North', isCorrect: true },
				{ answerText: 'Richie Rich	', isCorrect: false },
			],
		},{
			questionText: 'Which boxer was famous for striking the gong in the introduction to J. Arthur Rank films?',
			answerOptions: [
				{ answerText: 'Freddie Mills', isCorrect: false },
				{ answerText: ' Terry Spinks', isCorrect: false },
				{ answerText: 'Bombardier Billy Wells', isCorrect: true },
				{ answerText: 'Don Cockell	', isCorrect: false },
			],
		},{
			questionText: 'What was Humphrey Bogart&#039;s middle name?',
			answerOptions: [
				{ answerText: 'DeForest', isCorrect: false },
				{ answerText: ' Bryce', isCorrect: false },
				{ answerText: 'DeForest', isCorrect: true },
				{ answerText: 'Steven	', isCorrect: false },
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
             <Link to='/books' className='text-decoration-none' >Entertainment Books</Link>
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
export default FilmsQuiz