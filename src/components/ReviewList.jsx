import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"
import ReviewItem from "./ReviewItem"
import Spinner from "./layout/Spinner"

function ReviewList() {
  const {review, loading} = useContext(ReviewContext)

    if(!loading && (!review || review.length === 0)){
        return <p>No review yet!</p>
      }
        
  return loading ? <Spinner /> : (
    <>
      <div>
        {review.map((item) => (
            <div key={item.id}>
                <ReviewItem review={item} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList
