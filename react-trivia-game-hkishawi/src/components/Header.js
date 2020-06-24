import React from 'react'

class Header extends React.Component {
  render () {
    return [
      <div class="header">
        <h1 >Welcome to Trivia!</h1>
        <div>
        <span><a href='http://localhost:3000/' onClick=""> home | </a></span>
        <span> trivia | </span>
        <span> about </span>
        </div>
      </div>
    ]
  }
}

export default Header
