import React, { Component } from "react"
import { auth, database } from "./firebase"
import "./NewRestaurant.css"

class NewRestaurant extends Component {
  constructor(initialProps) {
    super(initialProps)
    this.state = {
      name: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const ref = database.ref("/restaurants").push()
    const user = auth.currentUser.uid
    ref.set({
      id: ref.key,
      name: this.state.name,
      votes: {
        [user]: Date.now()
      },
      user
    })
    this.setState(() => ({
      name: ""
    }))
  }

  render() {
    const { name } = this.state

    return (
      <form className="NewRestaurant">
        <input
          type="text"
          value={name}
          placeholder="Name of Fine Establishment"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    )
  }
}

export default NewRestaurant
