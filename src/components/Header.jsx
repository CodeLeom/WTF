import PropTypes from 'prop-types'


function Header({name, date}) {
  return (
    <>
        <header>
            <h1>{name}, today is {date}</h1>
        </header>
    </>
  )
}

Header.defaultProps = {
    name: "Ajoke Pre-Order",
    date: 31
}


Header.propTypes = {
    name: PropTypes.string,
    date: PropTypes.number
}
// setting default props, proptypes

export default Header
