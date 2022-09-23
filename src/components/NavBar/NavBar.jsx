import Logo from "../Logo/Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"

function NavBar() {
  return (
    <header className="header">
        <Logo/>
        <nav className="navBar">
            <ul className="navBarList">
                <a href="#" className="navBarLink"><li>Accion</li></a>
                <a href="#" className="navBarLink"><li>Cómico</li></a>
                <a href="#" className="navBarLink"><li>Ciencia Ficcion</li></a>
                <a href="#" className="navBarLink"><li>Mangas</li></a>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
