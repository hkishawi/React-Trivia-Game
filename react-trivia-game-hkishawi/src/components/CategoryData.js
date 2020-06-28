import React from 'react'
import axios from 'axios'
// import AnswerData from './AnswerData'

export default class CategoryData extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     questions: []
  //   }    
  // }

  // componentDidMount () {
  //   axios
  //     .get('https://opentdb.com/api.php?amount=10')
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({ questions: response.data.results })
  //     })
  // }

  render () {
    return (
      <div className='CategoryData'>
        <h2>Pick a trivia category</h2>
        <div>
          {this.props.categories.map(category => (
            <button 
              key={category.id} 
              className=''
              onClick={() => this.props.currentCategory(category)}
            >
              {category.name}
              </button>
          ))}
        </div>
      </div>
    )
  }
}

