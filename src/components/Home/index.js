// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {status: true, message: 'Please Login'}

  Login = () => {
    const {status} = this.state
    this.setState(() => {
      if (status) {
        return {status: false, message: 'Welcome User'}
      }
      return {status: true, message: 'Please Login'}
    })
  }

  render() {
    const {status, message} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <Message message={message} />
          {status ? (
            <Login onclick={this.Login} />
          ) : (
            <Logout onclick={this.Login} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
