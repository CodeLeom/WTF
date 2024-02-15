import Input from "./layout/Input"

function Signup() {
  return (
    <div>
      <h1 style={{color: 'rebeccapurple'}}>SignUp</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
