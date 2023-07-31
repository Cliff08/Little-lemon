import "./Specials.css"
import { Link } from "react-router-dom";
import SpecialCard from '../../Components/SpecialCard/SpecialCard';
import Logo1 from "../../pictures/food1.webp";
import Logo2 from "../../pictures/food2.webp";
import Logo3 from "../../pictures/food3.webp";
const specialMenus = [
    {
        id:1,
        img:Logo1,
        title:"Food1",
        description:
        "Food1 is Filipino-style spring rolls made of ground pork, chicken, or beef filling wrapped in thin crepes called lumpia wrappers.",
        price:"$15.00",
    },
    {
        id:2,
        img:Logo2,
        title:"Food2",
        description:
        "Food2 is a great tasting and healthy dish to prepare for your family. It is easy to cook and friendly on the budget.Please take it.",
        price:"$7.00",
    },
    {
        id:3,
        img:Logo3,
        title:"Food3",
        description:
        "Food3 is a simple yet satisfying recipe. It is eaten with steamed rice and ketchup.. It is eaten with steamed rice and ketchup.Good time!",
        price:"$2.50",
    }
];
function Specials() {
    return (
      <section id="section2" className="section2">
        <div className="container special-content">
            <div className="special-top">
                <h2>Specials</h2>
                <Link to='/specials'><button className="button">Online Menu</button></Link>
            </div>
            <div id="special-list" className="specials-list">
                {specialMenus.map(({id, img, title, description, price}) => (
                    <SpecialCard
                    key = {id}
                    img = {img}
                    title = {title}
                    description = {description}
                    price = {price}/>
                ))}
            </div>
        </div>

      </section>
    );
  }

  export default Specials;