import Input from "./layout/Input"

function Register(props) {
  return (
    <>
    <h1 style={{color: 'rebeccapurple'}}>{props.isUser ? 'Login' : 'Register'}</h1>

      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.isUser && (<Input type="password" placeholder="Confirm Password" />)}
        <button type="submit">{props.isUser ? 'Login' : 'Register'}</button>
      </form>
    </>
  )
}

export default Register
