
const header = {
  backgroundColor: '#ff6a95',
  color: '#fff'
}

function Header({text}) {

  return (
    <>
      <header style={header} className="head">
        <h3>{text}</h3>
      </header>
    </>
  )
}

export default Header
