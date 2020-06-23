import React from 'react';
import axios from 'axios'

export default class CategoryList extends React.Component {
    state = {
        categories: [],
    };

    componentDidMount() {
        axios.get('https://opentdb.com/api_category.php')
        .then(response => {
            console.log(response);
            this.setState({ categories: response.data });
        });
    }
    render() {
        return (
            <ul>
                { this.state.categories.map(category => 
                    <li>{category.name}</li>)}
            </ul>
        )
    }
}



