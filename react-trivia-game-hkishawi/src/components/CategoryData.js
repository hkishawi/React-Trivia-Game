import React from 'react'
import axios from 'axios'

export default class CategoryData extends React.Component {
    constructor() {
        super()
        this.setState({
            questions: []
        })
    }


componentDidMount () {
    axios.get(`https://opentdb.com/api_count.php?category=${this.props.category.id}`)
        .then(response => {
            this.setState({ questions: response.data })
        })
    }   
    

  render () {
    const { category } = this.props //take the key category and assign the variable category
    return (
      <div class='CategoryData'>
        <hi>{category.name}</hi>
        <ul>

        </ul>
      </div>
    )
  }
}