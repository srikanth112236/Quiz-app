import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
    <div className='container navbar'>
    <div className='logo'>
    <a className="menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    <i className="fa-solid fa-bars"></i>
</a>


<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">QuizApp</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   <h3 className='text-dark'>Select Your Quiz Type</h3>
   <ul>
   <li ><a href=""><Link to='/quiz-home' className='text-decoration-none list-style-none text-black'>Take Quiz</Link></a></li>
   </ul>
  </div>
</div>
    <Link to='/'className='text-decoration-none text-dark' ><h2 className='logo-title '>Quiz-App</h2></Link>
    </div>
    <ul className='quiz-links'>

<li ><Link to='/quiz-home' className='text-decoration-none list-style-none text-black'>Take Quiz</Link></li>

    </ul>

    <div className='user'>
    <h3 className='user' >user</h3>
    </div>
    </div>
    </div>
  )
}

export default Header