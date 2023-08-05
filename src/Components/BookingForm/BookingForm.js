import { useState } from 'react';
import './BookingForm.css'


const BookingForm = ({isFormSubmit, onFormSubmit}) => {
    const [formValues,setFormValues] = useState({
        date:"",
        time:"17:00",
        people:"",
        occasion:"",
    });
const handleInputChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]:e.target.value,
    });
};
const min_count = 1;
const max_count = 12;

    return (
      <form id="BookingForm" className="BookingForm" onSubmit = {(e) => {onFormSubmit(e,formValues)}}>
        <div className="container">
            <div id="date" className="date">
                <label htmlFor="date" className="form-item-title">Choose date*</label>
                <input type="date"
                id="date"
                name="date"
                onChange={handleInputChange}
                className={isFormSubmit && !formValues.date?"erro":""}>
                </input>
            </div>
            <div id="time" className="time">
                <label htmlFor="time" className="form-item-title">Choose time*</label>
                <select id="time"
                name='time'
                onChange={handleInputChange}
                className={isFormSubmit && !formValues.time?"erro":""}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div id="people" className="people">
                <label htmlFor="people" className="form-item-title">Number of guests*</label>
                <input type="number"
                id="people"
                name="people"
                min={min_count}
                max={max_count}
                onChange={handleInputChange}
                className={isFormSubmit && !formValues.people?"erro":""}>
                </input>
            </div>
            <div id="occasion" className="occasion">
                <label htmlFor="occasion" className="form-item-title">Occasion*</label>
                <select
                id='occasion'
                name='occasion'
                onChange={handleInputChange}
                className={isFormSubmit && !formValues.occasion?"erro":""}
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