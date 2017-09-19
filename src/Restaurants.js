import React, { Component } from "react"
import Restaurant from "./Restaurant"
import { database } from "./firebase"
import "./Restaurants.css"

class Restaurants extends Component {
  state = {
    restaurants: []
  }

  getData = snap => {
    this.setState(() => {
      return {
        restaurants: Object.values(snap.val() || {})
      }
    })
  }

  componentDidMount() {
    database.ref("/restaurants").on("value", this.getData)
  }

  componentWillUnmount() {
    database.ref("/restaurants").off("value", this.getData)
  }

  render() {
    return (
      <section className="Restaurants">
        {this.state.restaurants.map(restaurant => (
          <Restaurant {...restaurant} key={restaurant.id} />
        ))}
      </section>
    )
  }
}

export default Restaurants
