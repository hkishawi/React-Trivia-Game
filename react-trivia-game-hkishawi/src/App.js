import React from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'

class App extends React.Component {
  constructor () {
    super()
    console.log('constuctor')
    this.state = {
      prompts: []
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.setState({
      prompts:[
      {
        category: 'Entertainment: Television',
        key: '1.1',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Who played Agent Fox Mulder in the TV sci-fi drama &quot;The X-Files&quot;?',
        correct_answer: 'David Duchovny',
        incorrect_answers: [
          'Gillian Anderson',
          'Robert Patrick',
          'Mitch Pileggi'
        ]
      },
      {
        category: 'History',
        key: '1.2',
        type: 'multiple',
        difficulty: 'medium',
        question: 'What number does the Roman numeral &quot;D&quot; stand for?',
        correct_answer: '500',
        incorrect_answers: [
          '100',
          '1000',
          '50'
        ]
      },
      {
        category: 'Geography',
        key: '1.3',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What is the capital of Denmark?',
        correct_answer: 'Copenhagen',
        incorrect_answers: [
          'Aarhus',
          'Odense',
          'Aalborg'
        ]
      }
    ]
    })
  }



  render () {
    console.log('render')
    return (
      <div className='App'>
        <Header />
        <div>
          <h3>List of categories</h3>
          <ul>
            {this.state.prompts.map(prompt => (
              <li key={prompt.key}>{prompt.category}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
};

export default App
