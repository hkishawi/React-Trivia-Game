import React from 'react'
import axios from 'axios'

export default class AnswerData extends React.Component {
  render () {
    const { answer } = this.props //take the key country and assign it to the variable country 
    return (
      <div class='border-box' class='AnswerData'>
        <h1>{answer}</h1>
      </div>
    )
  }
}
//after exporting this, render in app.js