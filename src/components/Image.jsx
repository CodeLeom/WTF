

function Image(props) {
  return (
    <div>
      <img src={props.img} alt={props.title} className="circle-img" />
    </div>
  )
}

export default Image
