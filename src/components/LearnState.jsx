import { useState } from "react"

function LearnState() {
    const [dollarPrice, setDollarPrice] = useState(400)


    const handleClick =()=> {
        setDollarPrice(prev => {
            console.log(prev)
            return prev + 400;
        })
    }
    
  return (
    <>
      <div>
        <p>What is today's Dollar rate?</p>
        <small style={{marginRight: '10px'}}>$ {dollarPrice}.00</small>
        <button onClick={handleClick}>click</button>
        <br />
      </div>
    </>
  )
}

export default LearnState
