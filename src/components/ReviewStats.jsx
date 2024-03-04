

function ReviewStats({reviews}) {
    // sum of the total reviews rating and divided by the total length of the array and the output is converted to a single decimal place.

    let average = (reviews.reduce((acc, cur) => {
        return acc + cur.rating}, 0)/reviews.length).toFixed(1)

  return (
    <>
      <div className="review-stats">
        <p>Reviews: {reviews.length}</p>

        <p>Average: {isNaN(average) ? 0 : average}</p>
      </div>
    </>
  )
}

export default ReviewStats
