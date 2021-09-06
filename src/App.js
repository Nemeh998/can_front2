import React, { Component } from 'react'
import Profile from './componant/Profile'
import LoginButton from './componant/LoginButton'
import LogoutButton from './componant/LogoutButton'
export class App extends Component {
  render() {
    return (
      <>
    <LoginButton/>
    <LogoutButton/>
    <Profile/>
    </>
    
    )
  }
}

export default App
