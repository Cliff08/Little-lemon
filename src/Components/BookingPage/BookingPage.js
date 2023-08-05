import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import Popup from "../Popup/Popup";
import './BookingPage.css'
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [isPopup,setIsPopup] = useState(false);
  const pages = new Map();
  pages.set("homepage",{name:"homepage",path:"/",anchorable:true});
  const navigate = useNavigate();
  const [isFormSubmit,setIsFormSubmit] = useState(false);
  const handleFormSubmit = (e,formValues) => {
    e.preventDefault();
    setIsFormSubmit(true);
    const allFormsItemFill = Object.values(formValues).every((value) => value);
    if (allFormsItemFill) {
      setIsPopup(true);
    }
  }

    return (
      <div id="Bookingpage" className="Bookingpage">
        <div className="container">
          <div id="title" className="title">Booking Now</div>
        <div id="Bookingform" className="Bookingform">
          <BookingForm
          isFormSubmit = {isFormSubmit}
          onFormSubmit = {handleFormSubmit}/>

        </div>
        {isPopup && (
          <Popup
          onClose = {() =>
            {
            setIsPopup(false)
            navigate(pages.get("homepage").path);
          }}
          text = "Submit successfully!"
          description = "You have booked the reservation successfully.Please wait for our reply. Thank you!"/>
        )}
        </div>

      </div>
    );
  }

  export default BookingPage;