// import Login from "./components/Login"
// import Signup from "./components/Signup"

import Register from "./components/Register"

function App() {
  let isRegistered = false
  return (
    <div className="container">
        <h1>My fourth React App</h1>
        
        <Register isUser={isRegistered} />







        {/* {isUser ? <Login /> : <Signup />}          */}
    </div>
  )
}

export default App
