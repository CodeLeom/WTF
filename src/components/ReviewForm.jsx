import { useState } from "react"

function ReviewForm() {
    const [text, setText] = useState('')

    const textHandler = (e) => {
        setText(e.target.value)
    }

  return (
    <>
      <div className="container">
        <div className="card">
            <form>
                <h3>Kindly drop a Review for our service you just experienced.</h3>
                <div className="input-group">
                    <input type="text" value={text} placeholder="write your review here" onChange={textHandler} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
