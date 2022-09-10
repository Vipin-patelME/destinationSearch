import {Component} from 'react'
import Placelist from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  userSearcInput = event => {
    this.setState({
      searchinput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchinput} = this.state
    console.log(searchinput)
    const serchedlist = destinationsList.filter(eachUser =>
      eachUser.name.includes(searchinput),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-cont">
          <input
            value={searchinput}
            type="search"
            onChange={this.userSearcInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>
        <ul className="list-container">
          {serchedlist.map(eachPlace => (
            <Placelist eachPlace={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
