import "./Footer.css";
import Logo from "../../pictures/logo-white.png";
import { Link } from "react-router-dom";
function Footer() {
    return (
      <footer id="footer" className="footer">
        <div className="container foot-container">
          <img className="foot-logo" src={Logo} alt="foot-logo"></img>
          <div className="footer-nav">
            <p className="title">Doormat Nav Igation</p>

                <Link className="item-content" to='/'>HomePage</Link>

                <Link className="item-content" to='/chicago'>About</Link>

                <Link className="item-content" to='/specials'>Menu</Link>

                <Link className="item-content" to='/booking'>Reservations</Link>

                <Link className="item-content" to='/nocontent'>Order Online</Link>

                <Link className="item-content" to='/nocontent'>Login</Link>
          </div>
          <div className="contact">
          <p className="title">Contact</p>
          <p className="item-content">Adress:Chicago</p>
          <p className="item-content">Phone number:956556</p>
          <p className="item-content">email:656498@163.com</p>
          </div>
          <div className="social">
          <p className="title">Social Media Links</p>
          <p className="item-content">Adress:Chicago</p>
          <p className="item-content">Phone number:956459</p>
          <p className="item-content">email:754568@163.com</p>
          </div>
        </div>

      </footer>
    );
  }

  export default Footer;