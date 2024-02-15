import Card from "./components/Card"
import Header from "./components/Header"
import pdt from './data'



function App() {

  return (
    <>
      <Header />
      {pdt.map((item) => ( 
        <Card 
          key={item.id} 
          title={item.title} 
          img={item.image} 
          desc={item.description} 
          price={item.price} 
        />)
)}
    </>
  )
}

export default App
