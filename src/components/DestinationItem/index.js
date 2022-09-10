// Write your code here
import './index.css'

const Placelist = props => {
  const {eachPlace} = props
  const {name, imgUrl, key} = eachPlace

  return (
    <li>
      <img className="image-style" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default Placelist
