import "./SpecialCard.css"
import { Link } from "react-router-dom";
const SpecialCard = (props) => {
    return (
        <div className="special-card">
            <div className="specials-list">
                <div id = "specials-item" className = "specials-item">
                    <img id = "img" src = {props.img} alt = "food-logo"></img>
                    <div className="food-word">
                        <div className="food-head">
                            <p className="food-name">{props.title}</p>
                            <p className="food-price">{props.price}</p>
                        </div>
                        <div className="food-description">{props.description}</div>
                        <Link to='/nocontent' className="food-order">Order it!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default SpecialCard;