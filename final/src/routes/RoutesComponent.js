import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CelebritiesQuiz from '../components/quiz-components/CelebritiesQuiz'
import Home from '../components/Home'
import HomeComp from '../components/HomeComp'
import AnimalsQuiz from '../components/quiz-components/AnimalsQuiz'
import BooksQuiz from '../components/quiz-components/BooksQuiz'
import FilmsQuiz from '../components/quiz-components/FilmsQuiz'
import GeographyQuiz from '../components/quiz-components/GeographyQuiz'
import QuestionCompOne from '../components/quiz-components/QuestionCompOne'
import SportsQuiz from '../components/quiz-components/SportsQuiz'
import ScienceAndNature from '../components/quiz-components/ScienceAndNature'
import HistoryQuiz from '../components/quiz-components/HistoryQuiz'
import ScienceAndMathematics from '../components/quiz-components/ScienceAndMathematics'
import ScienceAndComputers from '../components/quiz-components/ScienceAndComputers'
import Gadgets from "../components/quiz-components/Gadgets"
const RoutesComponent = () => {
  return (
    <Routes>
    <Route path='/' element={< Home / >} / >
    <Route path='/quiz-home'element={<HomeComp / >} / >
    <Route path='/general-knowledge' element={<QuestionCompOne / >} / >
    <Route path='/books' element={<BooksQuiz / >} / >
    <Route path='/films' element={<FilmsQuiz / >} / >
    <Route path='/geography' element={<GeographyQuiz / >} / >
    <Route path='/sports' element={<SportsQuiz / >} / >
    <Route path='/animals-quiz' element={<AnimalsQuiz / >} / >
    <Route path='/celebrities-quiz' element={<CelebritiesQuiz / >} / >
    <Route path='/science-and-nature' element={<ScienceAndNature / >} / >
    <Route path='/history' element={< HistoryQuiz / >} / >
    <Route path='/science-and-mathematics' element={<ScienceAndMathematics/ >} / >
   <Route path='/science-and-computers' element={<ScienceAndComputers / >} / >
   <Route path='/gadgets' element={<Gadgets / >} / >

    </Routes>
  )
}

export default RoutesComponent