import React from 'react'

class Header extends React.Component {
  render () {
    return [
      <div class="header">
        <h1 >Welcome to Trivia!</h1>
        <div>
        <span>home | </span>
        <span> trivia | </span>
        <span> about </span>
        </div>
      </div>
    ]
  }
}

export default Header
