import "./logo.css"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className="logo">
        <Link to="/"><img src={require("../../assets/logo.png")} /></Link>
    </div>
  )
}

export default Logo

