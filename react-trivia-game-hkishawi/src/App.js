import React from 'react'
import './App.css'
import Header from './components/Header'
import CategoryList from './components/Question'
import axios from 'axios'
import CategoryData from './components/CategoryData'


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
      .get('https://opentdb.com/api_category.php')
      .then(response => {
        console.log(response.data)
        this.setState({
          categories: response.data.trivia_categories
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
    const { categories, currentCategory } = this.state

    return (
      <div className='App'>
        {
          currentCategory 
          ? <CategoryData category={currentCategory} />
          : (
          <div>
            <Header />
            <h3>List of categories</h3>
            <ul>
              {this.state.categories.map(category =>
                <li key={category.id}>
                  <a href='#' onClick={() => this.setCategory(category)}>{category.name}</a>
                </li>
              )}
            </ul>
          </div>
          )
        }
      </div>
    )
  }
};

export default App
