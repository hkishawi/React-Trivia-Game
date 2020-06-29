import React from 'react'
import './App.css'
import './tachyons.css'
import Header from './components/Header'
import CategoryList from './components/QuestionData'
import axios from 'axios'
import CategoryData from './components/CategoryData'
import AnswerData from './components/AnswerData'
import QuestionData from './components/QuestionData'

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
      // currentQuestion: null,
      // currentAnswer: null
    }

    this.currentCategory = this.currentCategory.bind(this)
  }

  componentDidMount () { // this pulls the data we're using
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

  // setQuestion (category) { // this will change the state of obj that will be rendered
  //   this.setState({ currentQuestion: results.question })
  // }

  currentCategory (category) {
    this.setState({ currentCategory: category })
  }

  // currentAnswer (category) {
  //   this.setState({ currentAnswer: category.answer })
  // }

  render () {
    console.log('render')
    const { categories, currentCategory } = this.state

    return (
      <div className='App align dib center'>
        {
          currentCategory
            ? <QuestionData currentCategory={currentCategory} />
            : (<CategoryData
              categories={this.state.categories}
              currentCategory={this.currentCategory}
            />)
        }

        {/* {
          currentCategory
            ? <QuestionData currentCategory={currentCategory} />
            : (
              <CategoryData
                categories={categories}
                currentCategory={this.currentCategory}
              />
            )
        } */}
      </div>
      // <div className='App'>
      //   <Header />
      //   {
      //     currentCategory // ? is an if statement so if << then >>
      //       ? <CategoryData category={currentCategory} />
      //       : ( // :  else
      //         <div>
      //           <h3>List of categories</h3>
      //           <ul>
      //             {this.state.categories.map(category => (
      //               <li key={category.id}>
      //                 <a href='#' onClick={(e) => { e.preventDefault(); this.currentCategory(category) }}>{category.name}</a>
      //               </li>
      //             ))}
      //           </ul>
      //         </div>
      //       )
      //   }
      // </div>
    )
  }
};

export default App
