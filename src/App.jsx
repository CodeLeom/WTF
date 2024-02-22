import { useState, createContext } from "react"
import Header from "./components/Header"
import LearnState from "./components/LearnState"
import wtFellows from './data/fellows'
import ListFellows from "./components/ListFellows"
import ChildA from "./components/layout/ChildA"


let context = createContext(null)

function App() {
  const [users, setUsers] = useState(wtFellows)
  const [fName, setFname] = useState('Motsekuwa')
  const [lName, setLname] = useState('Keziah')

  return (
    <>
      <Header name={"Understanding React again"} date={new Date().getDate()} />

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae laborum itaque tenetur molestias non mollitia? Necessitatibus earum voluptatibus voluptatem cum, consequatur vero aperiam provident quibusdam nostrum, sit aspernatur, cumque quisquam.</p>
      <LearnState />
      <ListFellows users={users} />
      <hr /><br />
      <div>This is the parent component</div>
      <br />
        <context.Provider value={{fName, lName}}>
          <ChildA />
        </context.Provider>
    </>
  )
}

// To Learn
{/* 
        STATE ✔️
        MANAGING GLOBAL STATE ✔️
        EVENTS (PROPS DRILLING) ✔️
        Context API, useContext Hook ✔️
        FORMS, FORM VALIDATION
        ROUTES, Links
        Deployment
*/}

export {context}
export default App
