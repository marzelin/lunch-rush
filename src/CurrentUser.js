import React, { PropTypes } from "react"
import { auth } from "./firebase"
import "./CurrentUser.css"

const signOut = () => auth.signOut()

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <img src={user.photoURL} alt="photo" className="CurrentUser--photo" />
      <div className="CurrentUser--identification">
        <h3>{user.displayName}</h3>
        <button type="button" onClick={signOut}>
          Sign out
        </button>
      </div>
    </div>
  )
}

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
}

export default CurrentUser
