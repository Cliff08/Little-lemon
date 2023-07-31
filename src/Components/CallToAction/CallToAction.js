import "./CallToAction.css";
import Logo from "../../pictures/food1.png";
import { Link } from "react-router-dom";

function CallToAction() {
    return (
      <section id="section1" className="section1">
        <div className="container call-content">
            <div className="word">
                <h1 className="tit1">Little Lemon</h1>
                <h2 className="tit2">Chicago</h2>
                <p className="content">The restraunt has a long history.
                It's familar with people from all over the world.
                welcome to here.I wish you will hava a good time here.
                Our food will not only satisfy your
                cravings, but will also provide you with a great memory for us to
                remember.</p>
                <Link to='/booking'><button className="button">Book A Reservation</button></Link>
            </div>
            <img  className="food-logo1" src={Logo} alt="food-logo1"></img>
        </div>
      </section>
    );
  }

  export default CallToAction;