import './BookingForm.css'

const BookingForm = () => {



    return (
      <form id="BookingForm" className="BookingForm">
        <div className="container">
            <div id="date" className="date">
                <label htmlFor="date" className="form-item-title">Date*</label>
                <input type="date" id="date" name="date"></input>
            </div>
            <div id="time" className="time">
                <label htmlFor="time" className="form-item-title">Time*</label>
                <input  id="time" name="time"></input>
            </div>
            <div id="people-count" className="people-count">
                <label htmlFor="people-count" className="form-item-title">People Count*</label>
                <input type="number" id="people-count" name="people-count"></input>
            </div>
            <div id="occasion" className="occasion">
                <label htmlFor="occasion" className="form-item-title">Occasion*</label>
                <select
                id='occasion'
                name='occasion'
                >
                <option value=''>Select Option</option>
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
                <option value='party'>Party</option>
                <option value='other'>Other</option>
                </select>
            </div>
            <div className='reservation-button'>
            <button text='Confirm Reservation' type='submit' value='submit'>submit</button>
            </div>

        </div>

      </form>
    );
  }

  export default BookingForm;