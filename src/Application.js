import React, { Component } from "react"
import { auth } from "./firebase"
import CurrentUser from "./CurrentUser"
import SignIn from "./SignIn"
import NewRestaurant from "./NewRestaurant"
import Restaurants from "./Restaurants"
import "./Application.css"

class Application extends Component {
  state = {
    currentUser: null
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState(() => ({
        currentUser: user
      }))
    })
  }

  render() {
    const user = this.state.currentUser
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        {user ? (
          <div>
            <Restaurants />
            <NewRestaurant />
            <CurrentUser {...{ user }} />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    )
  }
}

export default Application
