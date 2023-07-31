import "./CustomersSay.css"
import CommentCard from '../../Components/CommentCard/CommentCard';
import Logo1 from "../../pictures/customer1.webp";
import Logo2 from "../../pictures/customer2.webp";
import Logo3 from "../../pictures/customer3.webp";
import Logo4 from "../../pictures/customer4.webp";
const CommentList = [
  {
    id:1,
    img:Logo1,
    name:"Mike",
    rating:3,
    review:"I love the vegetables and how they cook eat, cripsy torta and lumpia"
  },
  {
    id:2,
    img:Logo2,
    name:"Jack",
    rating:4,
    review:"I love the service and the food, the food are all fresh and the aroma is calming"
  },
  {
    id:3,
    img:Logo3,
    name:"NewTon",
    rating:3,
    review:"I love the ice cream dessert, the filipino sorbetes is the best ice cream in the world"
  },
  {
    id:4,
    img:Logo4,
    name:"Brusse",
    rating:5,
    review:"The Tinolang Manok is so refreshing. The chicken broth is tasty and the chiken is super tender"
  },
]
function CustomersSay() {
    return (
      <div id='section3' className='section3'>
        <div id='customersay' className='customersay container'>
          <div id='title' className='title'>Testimonial</div>
          <div id='card-list' className='card-list'>
            {CommentList.map(({id, img, name, rating, review}) => (
              <CommentCard
              key = {id}
              img = {img}
              name = {name}
              rating = {rating}
              review = {review}/>
            ))}
          </div>
        </div>

      </div>
    );
  }

  export default CustomersSay;