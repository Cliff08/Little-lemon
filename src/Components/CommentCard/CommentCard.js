import "./CommentCard.css"
import Ico from "../../pictures/star.svg";
const CommentCard = (props) => {
    return (
        <div id="CommentCard" className="CommentCard">
            <div id="Rating" className="Rating">
                {props.rating &&
                [...Array(props.rating)].map(() => (
                    <img
                    src={Ico}
                    alt="star"
                    height={15}
                    width={15}
                    />
                ))}
            </div>
            <div id="center" className="ceneter">
                <div id="img" className="img"><img
                src={props.img} alt="user" className="user" height={50}></img>
                </div>
                <div id="name" className="name">{props.name}</div>
            </div>
            <div id="review" className="review">{props.review}</div>
        </div>

    );
  }

  export default CommentCard;