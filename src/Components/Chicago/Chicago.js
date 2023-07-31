import Logo1 from "../../pictures/chicago1.webp";
import Logo2 from "../../pictures/chicago2.webp";
import "./Chicago.css";
function Chicago() {
    return (
        <section id="section4" className="section4">
        <div className="container call-content">
            <div className="word">
                <h1 className="tit1">Little Lemon</h1>
                <h2 className="tit2">Chicago</h2>
                <p className="content">The restraunt has a long history.
                It's familar with people from all over the world.
                welcome to here.I wish you will hava a good time here.
                Our food will not only satisfy your
                cravings, but will also provide you with a great memory for us to
                remember.Chicago was the hometown of many influential politicians,
                including the first African American president of the United States Barack Obama,
                 because of the attraction,
                 commerce and Commerce of the city,
                 which brings millions of tourists every year with its rich resources,
                 Chicago has a tradition of receiving major places,
                 regions and countries.
                 </p>
            </div>
            <div id="img-cont" className="img-cont">
              <img src={Logo1} alt="img1" className="backgroud-image"></img>
              <img src={Logo2} alt="img2" className="overlay-image"></img>
            </div>
        </div>
      </section>
    );
  }

  export default Chicago;