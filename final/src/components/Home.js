import React from 'react'
import "../styles/Home.css";
import SlideImageOne from '../assets/images/slide-images/slide-1.gif'
import SlideImageTwo from '../assets/images/slide-images/slide-2.svg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className='slide-1'>
                <div className='container slide'>
                    <div className='slide-logo col-md-6 col-sm-6'>
                        <img src={SlideImageOne} alt='SlideImageOne' />
                    </div>
                    <div className='slide-content col-md-6 col-sm-6'>
                        <h2 className='slide-one-title mb-4' >Online psychological, educational and IQ tests</h2>
                        <p className='title-descp mt-4 mb-4' >Find out the answer to how to become better if you dont know your strengths and weaknesses.</p>
                        <Link to='/quiz-home'  className='slide-btn text-decoration-none' >Test Me !</Link >
                    </div>
                </div>
            </div>
            <div className='slide-2'>
                <div className='container slide'>
                    <div className='slide-logo col-md-6 col-sm-6'>
                        <img src={SlideImageTwo} alt='SlideImageOne' />
                    </div>
                    <div className='slide-content col-md-6 col-sm-6'>
                        <h2 className='slide-one-title mb-4' >Psychological tests</h2>
                        <ul className='slide2-content'>
                            <li>"Who am I?" or "What is happening to me?" Use all means to understand yourself and those around you.</li>
                            <li>Create your psychological portrait of personality.
                            </li>
                            <li> professional tests give an accurate result.</li>
                        </ul>   </div>
                </div>
            </div>
            <div className='slide-3'>
                <div className='container slide'>
                    <div className='slide-logo col-md-6 col-sm-6'>
                        <img src={SlideImageTwo} alt='SlideImageOne' />
                    </div>
                    <div className='slide-content col-md-6 col-sm-6'>
                        <h2 className='slide-one-title mb-4' >Perudition and knowledge tests</h2>
                        <ul className='slide2-content'>
                            <li>School tests will determine your basic knowledge.</li>
                            <li>Riddles and puzzles will test your logic.
                            </li>
                            <li> Intellectual and IQ tests will evaluate the maximum capacity of your brain.</li>
                            <li>Career tests will help you choose a profession properly.</li>
                        </ul>   </div>
                </div>
            </div>
            <div className='slide-4'>
            <div className='container slide'>
                <div className='slide-logo col-md-6 col-sm-6'>
                    <img src={SlideImageTwo} alt='SlideImageOne' />
                </div>
                <div className='slide-content col-md-6 col-sm-6'>
                    <h2 className='slide-one-title mb-4' >Perudition and knowledge tests</h2>
                    <ul className='slide2-content'>
                        <li>School tests will determine your basic knowledge.</li>
                        <li>Riddles and puzzles will test your logic.
                        </li>
                        <li> Intellectual and IQ tests will evaluate the maximum capacity of your brain.</li>
                        <li>Career tests will help you choose a profession properly.</li>
                    </ul>   </div>
            </div>
            <div className='container slide'>
            <div className='slide-content col-md-6 col-sm-6'>
            <h2 className='slide-one-title mb-4' >Perudition and knowledge tests</h2>
            <ul className='slide2-content'>
                <li>School tests will determine your basic knowledge.</li>
                <li>Riddles and puzzles will test your logic.
                </li>
                <li> Intellectual and IQ tests will evaluate the maximum capacity of your brain.</li>
                <li>Career tests will help you choose a profession properly.</li>
            </ul>   </div>
            <div className='slide-logo col-md-6 col-sm-6'>
                <img src={SlideImageTwo} alt='SlideImageOne' />
            </div>
         
        </div>
        <div className='container slide'>
        <div className='slide-logo col-md-6 col-sm-6'>
            <img src={SlideImageTwo} alt='SlideImageOne' />
        </div>
        <div className='slide-content col-md-6 col-sm-6'>
            <h2 className='slide-one-title mb-4' >Perudition and knowledge tests</h2>
            <ul className='slide2-content'>
                <li>School tests will determine your basic knowledge.</li>
                <li>Riddles and puzzles will test your logic.
                </li>
                <li> Intellectual and IQ tests will evaluate the maximum capacity of your brain.</li>
                <li>Career tests will help you choose a profession properly.</li>
            </ul>   </div>
    </div>
        </div>
        </>
    )
}

export default Home