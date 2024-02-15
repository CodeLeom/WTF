import Image from "./Image"


function Card(props) {
  return (
    <>
        <div className="container">
            <div className="top">
                <h1>{props.title}</h1>
                <Image img={props.img} alt={props.title} />
            </div>
            
            <div className="btm">
                <p>{props.desc}</p>
                <p>$ {props.price}</p>
            </div>
            
        </div>
        
    </>
  )
}

export default Card
