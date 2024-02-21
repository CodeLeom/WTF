
const styles = {
    marginTop: '20px', 
    backgroundColor: "#ccc", 
    width: 'auto', 
    height: 'auto', 
    padding: '20px'
}

const heading = {
    marginTop: '50px', 
    borderTop: '1px solid red'
}

const container ={
    border: '1px solid green',
    margin: '4px',
    padding: '10px'
}

function ListFellows({users}) {
    if(!users || users.length === 0){
        return <div>
                    <h1 style={heading}>List of fellows</h1>
                    <div style={styles}>
                        <p>No Fellows Data available</p>
                    </div>
               </div> 
    }

  return (
    <>
      <h1 style={heading}>List of fellows</h1>
      <div style={styles}>
            {users.map((user) => (
                <div key={user.id} style={container}>
                    <p>Fellow Name: {user.name}</p>
                    <p>Fellow Track: {user.track}</p>
                    <p>Fellow Current City: {user.city}</p>
                </div>
            ))}
      </div>
    </>
  )
}

export default ListFellows
