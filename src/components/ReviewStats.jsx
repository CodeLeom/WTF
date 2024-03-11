import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"

function ReviewStats() {
  const {review} = useContext(ReviewContext)
    // sum of the total reviews rating and divided by the total length of the array and the output is converted to a single decimal place.

    let average = (review.reduce((acc, cur) => {
        return acc + cur.rating}, 0)/review.length).toFixed(1)

  return (
    <>
      <div className="review-stats">
        <p>Reviews: {review.length}</p>

        <p>Average: {isNaN(average) ? 0 : average}</p>
      </div>
    </>
  )
}

export default ReviewStats
