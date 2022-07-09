import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Local Library</h1>
        <Link to="/">Overall Stats</Link>
        <Link to="/books">Stats By Book</Link>
      </nav>
    </header>
  )
}

export default Header
