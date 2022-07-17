import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/Footer'
import Header from './components/Header'
import HomeComp from './components/HomeComp'
import RoutesComponent from './routes/RoutesComponent'

const App = () => {
  return (
	<>
	<Header / >
	<RoutesComponent / >

	<Footer/ >
	</>
  )
}

export default App