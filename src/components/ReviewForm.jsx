import { useState } from "react"
import Button from "./layout/Button"

const spanStyle = {
  display: 'block',
  fontStyle: 'italic',
  marginTop: '10px'
}

function ReviewForm() {
    // state for input text 
  const [text, setText] = useState('')

    // state for button (disable)
    const [btnDisabled, setBtnDisabled] = useState(true)

    // state for validation (characters)
    const [msg, setMsg] = useState('')

    // function to update the text state (in the input field) and also validate the text characters to be above 20 before button will be enabled
    const textHandler = (e) => {
      if(text === ''){
        setBtnDisabled(true) //disbale button
        setMsg(null) // do not display message
      } else if(text !== '' && text.trim().length <=20){
        setMsg('Your review must be above 20 characters') //display message
        setBtnDisabled(true) //diable button
      } else {
        setMsg(null) // do not display message
        setBtnDisabled(false) //enable button
      }

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
                    
                    <Button type='submit' variant='secondary' isDisabled={btnDisabled}>
                        Submit
                    </Button>
                </div>
                {msg && (<span className="message" style={spanStyle}>{msg}</span>)}
            </form>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
