import React from 'react';

import Book from './book';

export class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [
                {name: 'JavaScript Basics', year: '2113', price: '5600'},
                {name: 'React for Noobs', year: '2353', price: '2144'},
                {name: 'Angular for PROs', year: '2245', price: '2442'},
            ]
        }
    }
    
    deletePost(bookInd) {
        this.setState({ books: this.state.books.filter( (_, index) => index !== bookInd) });
    }

    render() {
        return(
            <div className="">
                { this.state.books.map((item, index) => (<Book id={ index } name={ item.name } year={ item.year } price={ item.price } deleteFunc={this.deletePost.bind(this)}/>) ) }
            </div>
        )
    }
}

export default Books;