import { useState } from "react"
import Header from "./components/layout/Header"
import data from "./data/reviewData"
import ReviewList from "./components/ReviewList"


function App() {
  const [review, setReview] = useState(data)

  // function to delete a review
  const deleteReview = (id) =>{
    if(window.confirm('Are you sure, you want to delete this review?')){
      setReview(review.filter((item) => item.id !== id))
    }
  }

 


  return (
    <>
      <Header text="Review Application" />

      <div className="container">
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
    </>
  )
}

export default App