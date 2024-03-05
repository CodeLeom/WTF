import { useState } from "react"
import Header from "./components/layout/Header"
import data from "./data/reviewData"
import ReviewList from "./components/ReviewList"
import ReviewStats from "./components/ReviewStats"
import ReviewForm from "./components/ReviewForm"
import { v4 as uuid } from 'uuid'; 


function App() {
  const [review, setReview] = useState(data)

  // function to delete a review
  const deleteReview = (id) =>{
    if(window.confirm('Are you sure, you want to delete this review?')){
      setReview(review.filter((item) => item.id !== id))
    }
  }

//  function to add a review
const AddReview = (newReview) => {
  newReview.id=uuid()
  setReview([newReview, ...review])
}


  return (
    <>
      <Header text="Review Application" />
      <ReviewForm handleAdd={AddReview} />
      <div className="container">
        <ReviewStats reviews={review} /> 
        
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
    </>
  )
}

export default App