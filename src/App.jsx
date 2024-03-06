import { useState } from "react"
import { v4 as uuid } from 'uuid'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header"
import data from "./data/reviewData"
import ReviewList from "./components/ReviewList"
import ReviewStats from "./components/ReviewStats"
import ReviewForm from "./components/ReviewForm"
import Home from "./components/Pages/Home";
import Review from "./components/Pages/Review";
import About from "./components/Pages/About";



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
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <ReviewForm handleAdd={AddReview} />
                <div className="container">
                  <ReviewStats reviews={review} /> 
                  
                  <ReviewList reviews={review} deleteReview={deleteReview} />
                </div>
            </>
          }></Route>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>

    </>
  )
}

export default App