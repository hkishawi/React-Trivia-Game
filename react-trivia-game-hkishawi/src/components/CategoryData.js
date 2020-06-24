import React from 'react'
import axios from 'axios'

export default class CategoryData extends React.Component {
  constructor () {
    super()
    this.setState({
      questions: []
    })
  }

  componentDidMount () {
    axios.get(`https://opentdb.com/api.php?amount=10`)
      .then(response => {
        this.setState({ questions: response.data.results})
      })
  }

  render () {
    const { category } = this.props // take the key category and assign the variable category
    return (
      <div class='CategoryData'>
        <hi>{category.name}</hi>
        <ul />
      </div>
    )
  }
}
