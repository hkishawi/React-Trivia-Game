import React from 'react'
import './App.css'
import Header from './components/Header'
import Question from './components/Question'
import axios from 'axios'

class App extends React.Component {
  constructor () {
    super()
    console.log('constuctor')
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
    axios
      .get('https://opentdb.com/api_category.php')
      .then(response => {
        this.setState({
          categories: response.data
        })
      })
  }

  componentWillUnmount () {
    console.log('componentDidUnmount')
  }

  setCategory (category) {
    this.setState({ currentCategory: category })
  }

  render () {

    console.log('render')
    return (
      <div className='App'>
        <Header />
        <h3>List of categories</h3>
        <ul>
          {this.state.categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    )
  }
};

export default App
