import Logo from "../../pictures/logo.svg";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
    return (
      <header id = "header" class = "nav">
        <div class = "container">
          <div class = "nav-logo">
            <img src={Logo}
                 alt="nav-logo"></img>
          </div>
          <nav class = "nav-list">
            <ul>
              <li>
                <Link to='/'>HomePage</Link>
              </li>
              <li>
                <Link to='/chicago'>About</Link>
              </li>
              <li>
                <Link to='/specials'>Menu</Link>
              </li>
              <li>
                <Link to='/booking'>Reservations</Link>
              </li>
              <li>
                <Link to='/nocontent'>Order Online</Link>
              </li>
              <li>
                <Link to='/nocontent'>Login</Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>
    );
  }

  export default Nav;