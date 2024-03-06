 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header"
import Home from "./components/Pages/Home";
import Review from "./components/Pages/Review";
import About from "./components/Pages/About";



function App() {

  return (
    <>
      <Header text="Review Application" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>

    </>
  )
}

export default App