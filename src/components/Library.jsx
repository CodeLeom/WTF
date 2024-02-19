import { useState } from 'react'

function Library() {
    // initialize our application state with 'useState' hook
    const [books, setBooks] = useState(["Sophie's World", "The Lord of the Rings"])

    const [currBook, setCurrBook] = useState('') //to collect user input

    // function to handle user input
    const handleInput = (e) => {
        setCurrBook(e.target.value);
    }

    // function to add the user input to the borrowed books array
    const borrowBooks = () =>{
        if(currBook){
            setBooks([...books, currBook])
            setCurrBook('')
        }
    }

    const handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
            borrowBooks()
        }
    }

  return (
    <>
      <p>Women Techsters Book Library</p>
      <input 
        type="text" 
        value={currBook} 
        onChange={handleInput} 
        onKeyDown={handleKeyPress}
        placeholder='Kindly enter a book name' 
        />
      <button onClick={borrowBooks}>Borrow Book</button>
      <br /><br />
      <hr />
      <p>Borrowed Books</p>
      {books.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </>
  )
}

export default Library
