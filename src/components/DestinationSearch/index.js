import Placelist from './component/DestinationItem'
import {component} from 'react'
import './index.css'

class DestinationSearch extends component {
  render() {
    const {destinationsList} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <input type="search" onChange={this.userSearcInput} />
        <ul className="list-container">
          {destinationsList.map(eachPlace => (
            <Placelist eachPlace={eachPlace} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
