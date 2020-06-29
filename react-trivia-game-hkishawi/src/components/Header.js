import React from 'react'
// import './App.css'
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render () {
    return (
      <nav>
        <h1>Trivet</h1>
        <ul className='nav-links'>
          <Link to='/trivia'>
            <span>Home | </span>
          </Link>
          
          <Link to='/about'>
            <span> About</span>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Header
