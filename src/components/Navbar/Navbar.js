import "./Navbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="iconContainer">
            <Person className="icon"/>
            <span>+123 456 7890</span>
          </div>
          <div className="iconContainer">
            <Mail className="icon"/>
            <span>contact@genius.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
