import "./logo.css"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className="logo">
        <Link to="/"><img src="https://seeklogo.com/images/B/bang-comic-book-exclamation-logo-CF14DC98BE-seeklogo.com.png" /></Link>
    </div>
  )
}

export default Logo