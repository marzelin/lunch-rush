import React, { Component } from "react"
import { auth, googleAuthProvider } from "./firebase"

class SignIn extends Component {
  handleSignIn = () => {
    googleAuthProvider
  }
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign in
        </button>
      </div>
    )
  }
}

export default SignIn
