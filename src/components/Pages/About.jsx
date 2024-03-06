import { Link } from "react-router-dom";
import { FaHouseDamage } from "react-icons/fa";


function About() {
  return (
    <>
        <div className="container">
            <div className="card">
                <h3 className="head">About</h3>
                <p>This is a basic application for our customers to drop their review on the usage of our services and products</p>
                <p>Version: 1.0.0</p>
            </div>
            <div className="about-link">
                <Link to="/">
                    <FaHouseDamage size={40} />
                </Link>
            </div>
        </div>
      
    </>
  )
}

export default About
