import React, { Component } from 'react'

class LibraryClass extends Component {
    constructor(props){
        super(props)
        this.state ={
            books: ["Sophie's World", "The Lord of the Rings"],
            currBook: ''
        }
    }

    // function to handle user input
    handleInput = (e) => {
        // setCurrBook(e.target.value);
        this.setState({currBook: e.target.value})
    }
    
     // function to add the user input to the borrowed books array
     borrowBooks = (event) =>{
        if(currBook){
            this.setState({
                books:[...books, currBook],
                currBook:''
        })
        }
        event.preventDefault()
    }

    handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
            this.borrowBooks()
        }
    }

    render() {
        const {currBook, books} = this.state
    return (
        <>
            <p>Women Techsters Book Library</p>
            <form onSubmit={this.borrowBooks}>
                <input 
                    type="text" 
                    value={currBook} 
                    onChange={this.handleInput} 
                    onKeyDown={this.handleKeyPress}
                    placeholder='Kindly enter a book name' 
                />
                <button>Borrow Book</button>
            </form>
       
            <br /><br />
            <hr />
            <p>Borrowed Books</p>
            {books.map((book, index) => (
                <li key={index}>{book}</li>
            ))}
      </>
    )
  }
}


export default LibraryClass