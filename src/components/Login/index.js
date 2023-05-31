// Write your code here
import './index.css'

const Login = props => {
  const {onclick} = props
  return (
    <button className="btn" type="button" onClick={onclick}>
      LogIn
    </button>
  )
}

export default Login
