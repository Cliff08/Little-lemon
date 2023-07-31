import BookingForm from "../BookingForm/BookingForm";
import './BookingPage.css'

const BookingPage = () => {

    return (
      <div id="Bookingpage" className="Bookingpage">
        <div className="container">
          <div id="title" className="title">Booking Form</div>
        <div id="Bookingform" className="Bookingform">
          <BookingForm/>

        </div>
        </div>

      </div>
    );
  }

  export default BookingPage;