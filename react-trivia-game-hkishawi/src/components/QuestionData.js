import React from 'react'
import axios from 'axios'
import htmlEncoder from 'he'

export default class QuestionData extends React.Component {
  constructor () {
    super()
    this.state = {
      questions: [],
      currentQIdx: 0,
      score: 7
    }
    this.handleNextQuestion = this.handleNextQuestion.bind(this) // what is this doing?
    this.handlePrevQuestion = this.handlePrevQuestion.bind(this)
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this)
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this)
    this.scoreKeep = this.scoreKeep.bind(this)
  }

  componentDidMount () {
    const questionUrl = `https://opentdb.com/api.php?amount=10&category=${this.props.currentCategory.id}`
    axios.get(questionUrl)
      .then(response =>
        this.setState({
          questions: response.data.results
        }))
  }

  handleNextQuestion () {
    this.setState({ currentQIdx: this.state.currentQIdx + 1 })
  }

  handlePrevQuestion () {
    this.setState({ currentQIdx: this.state.currentQIdx - 1 })
  }

  handleCorrectAnswer () {
    this.setState({ score: this.state.score + 1 })
  }

  handleIncorrectAnswer () {
    this.setState({ score: this.state.score - 1 })
  }

  scoreKeep (answer) {
    const { questions, currentQIdx } = this.state
    const currentQuestion = questions[currentQIdx]
    const correct_answer = currentQuestion.correct_answer
    if (answer == correct_answer) {
      return this.handleCorrectAnswer()
    } else {
      return this.handleIncorrectAnswer()
    }
  }

  //   }

  render () {
    const { currentCategory } = this.props
    const { questions, currentQIdx, score } = this.state
    const currentQuestion = questions[currentQIdx]
    // const correct_answer = currentQuestion.correct_answer
    let answers = []
    if (currentQuestion) {
      answers = currentQuestion.incorrect_answers.concat([currentQuestion.correct_answer]) // this is combining the array of answers
    }
    return (
      <div className='QuestionData align'>
        <h1>{currentCategory.name} Questions</h1>
        <h2>score: {score}</h2>
        {currentQuestion && (
          <div>
            <div className='child inline ba'>
              <h2 className=''>{htmlEncoder.decode(currentQuestion.question)}</h2>
            </div>

            <div className=' '>
              {answers.map((answer, idx) =>
                <p key={idx}>
                  <button className='f6 link dim ba ph3 pv2 mb2 dib purple' onClick={this.scoreKeep}>
                    {answer}
                  </button>
                </p>)}
            </div>

          </div>

        )}
        {/* <ul>
          {this.state.questions.map((question, idx) => (
            <li key={idx}>{htmlEncoder.decode(question.question)}</li>))}
        </ul> */}
        {(currentQIdx < questions.length + 1) &&
          <button className='f6 link dim ba ph3 pv2 mb2 dib dark-blue' onClick={this.handlePrevQuestion}>previous question</button>}
        <br />
        {(currentQIdx < questions.length - 1) &&
          <button className='f6 link dim ba ph3 pv2 mb2 dib dark-blue' onClick={this.handleNextQuestion}>next question</button>}

        {/* <ul>
           { questions[0] ? <li>{htmlEncoder.decode(questions[0].question)}</li> :
           <button className='' onClick={this.handleNextQuestion}>next question</button>
           }
        </ul> */}
      </div>
    )
  }
}
