import React from 'react'
import axios from 'axios'
import htmlEncoder from 'he'

export default class QuestionData extends React.Component {
  constructor () {
    super()
    this.state = {
      questions: [],
      currentQIdx: null
    }
  }

  componentDidMount () {
    const questionUrl = `https://opentdb.com/api.php?amount=10&category=${this.props.currentCategory.id}`
    axios.get(questionUrl)
      .then(response =>
        this.setState({
          questions: response.data.results
        }))
  }

  render () {
    const { currentCategory } = this.props
    const { questions, currentQIdx } = this.state
    const currentQuestion = questions[currentQIdx]

    return (
      <div className='QuestionData'>
        <h1>{currentCategory.name} Questions</h1>
        {currentQuestion && (
          <div>
            <h2>{htmlEncoder.decode(currentQuestion.question)}</h2>
            <div>
              {currentQuestion.incorrect_answers.map((answer, idx) =>
                <p key={idx}>{answer}</p>)}
              <p>{currentQuestion.correct_answer}</p>
            </div>
          </div>
        )}
        {/* <ul>
          {this.state.questions.map((question, idx) => (
            <li key={idx}>{htmlEncoder.decode(question.question)}</li>))}
        </ul> */}
        <ul>
           { questions[0] ? <li>{htmlEncoder.decode(questions[0].question)}</li> : 
           <button className='' onClick={this.handleNextQuestion}>next question</button>
           }
        </ul>
      </div>
    )
  }
}
