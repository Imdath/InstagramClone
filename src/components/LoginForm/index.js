import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          className="user-input-field"
          value={password}
          id="password"
          onChange={this.onChangePassword}
          placeholder="Enter Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          className="user-input-field"
          value={username}
          id="username"
          onChange={this.onChangeUsername}
          placeholder="Enter Username"
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          className="login-form-image"
          src="https://res.cloudinary.com/dextfnjwj/image/upload/v1670850696/OBJECTSInstaShareImage_gpvb9k.png"
          alt="website logo"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dextfnjwj/image/upload/v1671208483/instalogo-modified_h5oili.png"
            className="insta-icon"
            alt="website icon"
          />
          <h1 className="insta-heading">Insta Share</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
