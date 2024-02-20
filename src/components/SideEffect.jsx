import { useState, useEffect } from 'react'


function SideEffect() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds('5')
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

  return (
    <>
    <hr />
        <h3>Side Effect Explanation</h3>
        <div>Timer: {seconds} seconds</div>
    </>
  )
}

export default SideEffect