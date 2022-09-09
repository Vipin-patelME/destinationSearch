import './index.css'
const Placelist = props => {
  const {eachPlace} = props
  const {name, imgUrl} = eachPlace

  return (
    <li>
      <img className="image-style" src={imgUrl} alt="Avatar" />
      <p>{name}</p>
    </li>
  )
}

export default Placelist
