import React from 'react'
import './App.css'
import Header from './components/Header'
import CategoryList from './components/Question'
import axios from 'axios'
import CategoryData from './components/CategoryData'

// Header () {
//   render () {
//     return [
//       <div class="header">
//         <h1 >Welcome to Trivia!</h1>
//         <div>
//         <span><a href='#' onClick={() => this.prop.setCategory(category)}>home | </a></span>
//         <span> trivia | </span>
//         <span> about </span>
//         </div>
//       </div>
//     ]
//   }
// }

class App extends React.Component {
  constructor (props) {
    super(props)
    console.log('constuctor')
    this.state = {
      categories: [],
      currentCategory: null
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        console.log(response.data)
        this.setState({
          categories: response.data.results
        })
      })
  }

  componentWillUnmount () {
    console.log('componentDidUnmount')
  }

  setQuestion (category) {
    this.setState({ currentQuestion: category.question })
  }

  render () {
    console.log('render')
    const { categories, currentCategory } = this.state

    return (
      <div className='App'>
        <Header />
        {
          currentCategory
            ? <CategoryData category={currentCategory} />
            : (
              <div>
                <h3>List of categories</h3>
                <ul>
                  {this.state.categories.map(category => (
                    <li key={category.question}>
                      <a href='#' onClick={() => this.setQuestion(category)}>{category.category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )
        }
      </div>
    )
  }
};

export default App
