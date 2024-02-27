
const error = {
  color: 'red',
  fontSize: 'bold',
  fontStyle: 'underline'
}

function NotFound() {
  return (
    <>
      <h3>Page Not Found</h3>
      <p>Sorry, the page you are trying to access does not exist or has been moved to another server | 
        <span style={error}> Error 404</span></p>
    </>
  )
}

export default NotFound
