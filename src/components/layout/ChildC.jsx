import { useContext } from "react"
import {context} from '../../App'

function ChildC() {
    const {fName, lName} = useContext(context)
    return (
      <>
        <p>I am Child C, and I am displaying data from App Component</p>
        <h3>{fName}</h3>
        <h3>{lName}</h3>
      </>
    )
  }
  
  export default ChildC
  