// Write your code here
import './index.css'

const Logout = props => {
  const {onclick} = props
  return (
    <button className="btn" type="button" onClick={onclick}>
      Logout
    </button>
  )
}

// const onBtn = () => (
//   <div>
//     <button type="button" onClick={this.onBtn}>
//       Logout
//     </button>
//   </div>
// )

// const Logout = () => <button type="button">Logout</button>

export default Logout
