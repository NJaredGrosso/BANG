import Logo from "../Logo/Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header className="header">
        <Logo/>
          <nav className="navBar">
              <ul className="navBarList">
                  <Link to="/category/marvel" className="navBarLink"><li>Marvel</li></Link>
                  <Link to="/category/dc" className="navBarLink"><li>DC</li></Link>
                  <Link to="/category/ciencia-ficcion" className="navBarLink"><li>Ciencia Ficcion</li></Link>
                  <Link to="/category/manga" className="navBarLink"><li>Mangas</li></Link>
              </ul>
          </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
