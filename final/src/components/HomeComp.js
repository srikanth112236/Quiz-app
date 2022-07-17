import React from 'react'
import "../styles/HomeComp.css";
import { Link } from 'react-router-dom';
import IconOne from '../assets/images/icon-1.svg';
import IconTwo from '../assets/images/icon-2.svg';
import IconTHree from '../assets/images/icon-3.svg';
import IconFour from '../assets/images/icon-4.svg';
import IconFive from '../assets/images/icon-5.svg';


const HomeComp = () => {
  return (
    <div className='home'>
      <div className='container home-comp'>
        <div className='content pt-5 pb-3'>
          <h2 className='t-online mt-3'>Lets gets started to train your brain sharp</h2>
          <h2 className='category mt-3'>Quiz Categories</h2>
        </div>
        <div className='quiz-category'>

          <div className='category-1 col-md-6'>
            <div className='category-logo'>
              <Link to='/general-knowledge'><img src={IconOne} alt='' /></Link>
            </div>
            <div className='category-test'>
            <Link to='/general-knowledge' className='text-decoration-none'><h3 className='test-title'>General Knowledge </h3></Link>
            </div>
          </div>
          <div className='category-1 col-md-6'>
            <div className='category-logo'>
            <Link to='/books'><img src={IconTwo} alt='' /></Link>
            </div>
            <div className='category-test'>
              <Link to='/books' className='text-decoration-none'><h3 className='test-title'>Entertainment : Books</h3></Link>
            </div>
          </div>
          <div className='category-1 col-md-6'>
            <div className='category-logo'>
            <Link to='/films'><img src={IconTHree} alt='' /></Link>
            </div>
            <div className='category-test'>
              <Link to='/films' className='text-decoration-none'><h3 className='test-title'>Entertainment : Films </h3></Link>
            </div>
          </div>
          <div className='category-1 col-md-6'>
            <div className='category-logo'>
            <Link to='/geography'><img src={IconFour} alt='' /></Link>
            </div>
            <div className='category-test'>
              <Link to='/geography' className='text-decoration-none'><h3 className='test-title'>Geography </h3></Link>
            </div>
          </div>
          <div className='category-1 col-md-6'>
            <div className='category-logo'>
            <Link to='/sports'><img src={IconFive} alt='' /></Link>
            </div>
            <div className='category-test'>
              <Link to='/sports' className='text-decoration-none'><h3 className='test-title'>Sports </h3></Link>
            </div>
          </div>
          <div className='category-1 col-md-6'>
          <div className='category-logo'>
          <Link to='/animals-quiz'><img src={IconTHree} alt='' /></Link>
          </div>
          <div className='category-test'>
            <Link to='/animals-quiz' className='text-decoration-none'><h3 className='test-title'>Animals</h3></Link>
          </div>
        </div>  
        <div className='category-1 col-md-6'>
        <div className='category-logo'>
        <Link to='/celebrities-quiz'><img src={IconFour} alt='' /></Link>
        </div>
        <div className='category-test'>
          <Link to='/celebrities-quiz' className='text-decoration-none'><h3 className='test-title'>Celebrities</h3></Link>
        </div>
      </div>
      <div className='category-1 col-md-6'>
        <div className='category-logo'>
        <Link to='/science-and-nature'><img src={IconFive} alt='' /></Link>
        </div>
        <div className='category-test'>
          <Link to='/science-and-nature' className='text-decoration-none'><h3 className='test-title'>Science And Nature </h3></Link>
        </div>
      </div>
      <div className='category-1 col-md-6'>
      <div className='category-logo'>
      <Link to='/history'><img src={IconTHree} alt='' /></Link>
      </div>
      <div className='category-test'>
        <Link to='/history' className='text-decoration-none'><h3 className='test-title'>History</h3></Link>
      </div>
    </div>  
    <div className='category-1 col-md-6'>
    <div className='category-logo'>
    <Link to='/science-and-computers'><img src={IconFour} alt='' /></Link>
    </div>
    <div className='category-test'>
      <Link to='/science-and-computers' className='text-decoration-none'><h3 className='test-title'>Science And Computers </h3></Link>
    </div>
  </div>
  <div className='category-1 col-md-6'>
    <div className='category-logo'>
    <Link to='/science-and-mathematics'><img src={IconFive} alt='' /></Link>
    </div>
    <div className='category-test'>
      <Link to='/science-and-mathematics' className='text-decoration-none'><h3 className='test-title'>Science And Mathematics </h3></Link>
    </div>
  </div>
  <div className='category-1 col-md-6'>
  <div className='category-logo'>
  <Link to='/gadgets'><img src={IconTHree} alt='' /></Link>
  </div>
  <div className='category-test'>
    <Link to='/gadgets' className='text-decoration-none'><h3 className='test-title'>Gadgets </h3></Link>
  </div>
</div>  
        </div>

      </div>
    </div>
  )
}

export default HomeComp