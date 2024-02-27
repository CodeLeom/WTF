import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Index from "./components/Pages/Index"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import NotFound from "./components/Pages/NotFound"
import Menu from "./components/Layout/Menu"




function App() {


  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<Index />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </Router>
      
    <Footer msg="WTF © 2024 | Welcome to our React Project" />

    </>
  )
}

export default App