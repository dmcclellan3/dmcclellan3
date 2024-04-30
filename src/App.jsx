import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

function App() {
  return (
    <div 
      className="bg-light h-100 p-5"
      style={{ color: 'black' }}
    >
      <Link className="text-dark" to='/about'>About</Link>
      <br />
      <Link to='./Blog'>{'Blog'}</Link>
      <br />
      <Link to='./Contact'>{'Contact'}</Link>
      <br />
      <Link to='./Projects'>{'Projects'}</Link>
      <Title />
    </div>
  )
}


export default App
