import React, { Component, PropTypes } from "react"
import "./Restaurant.css"
import { auth, database } from "./firebase"

class Restaurant extends Component {
  handleSelect = () => {
    const { id } = this.props
    database.ref(`/restaurants/${id}/votes`).update({
      [auth.currentUser.uid]: Date.now()
    })
  }
  handleDeselect = () => {
    const { id } = this.props
    database.ref(`/restaurants/${id}/votes/${auth.currentUser.uid}`).remove()
  }
  render() {
    const { votes = {}, name } = this.props
    const isSelected = votes[auth.currentUser.uid] ? true : false
    const handler = isSelected ? this.handleDeselect : this.handleSelect
    const buttonText = isSelected ? "deselect" : "select"
    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <h3>Votes: {Object.keys(votes).length} </h3>
        <button onClick={handler}>{buttonText}</button>
      </article>
    )
  }
}

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.string
}

export default Restaurant
