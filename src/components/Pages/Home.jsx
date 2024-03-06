import Button from "../layout/Button"
import { useRoutes } from "react-router-dom"



function Home() {
    const route = useRoutes()

    const handleNavigate = () => {
        route.push('/review')
    }

  return (
    <>
    <div className="container">
        <h1>Welcome to Group B Company</h1>
        <p>Thank you for using our product</p>
        <p>We would like you to give a review about your last experience using our product</p>
        <Button type='button' variant='secondary' onClick={handleNavigate}>
            Review
        </Button>
    </div>
    </>
  )
}

export default Home
