import { useState } from "react"
import Header from "./components/Header"
import LearnState from "./components/LearnState"
import wtFellows from './data/fellows'
import ListFellows from "./components/ListFellows"


function App() {
  const [users, setUsers] = useState(wtFellows)

  return (
    <>
      <Header name={"Understanding React again"} date={new Date().getDate()} />

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae laborum itaque tenetur molestias non mollitia? Necessitatibus earum voluptatibus voluptatem cum, consequatur vero aperiam provident quibusdam nostrum, sit aspernatur, cumque quisquam.</p>
      <LearnState />
      <ListFellows users={users} />
    </>
  )
}

// To Learn
{/* 
        STATE
        MANAGING GLOBAL STATE
        EVENTS (PROPS DRILLING)
        FORMS, FORM VALIDATION
        ROUTES, Links
        Context API, useContext Hook
        Deployment
*/}

export default App
