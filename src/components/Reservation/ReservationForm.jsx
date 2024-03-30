import React, { useState } from "react";
import { availableTimes } from "../../data";

const ReservationForm = ({ onSubmit }) => {
  const [reservation, setReservation] = useState({
    name: "",
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (event) => {
    setReservation({ ...reservation, [event.target.id]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    onSubmit(reservation);
  };

  return (
    <form>
      <div className="card reservation">
        <div className="card-body">
          <div className="row g-3 align-items-center m-1">
            <div className="col">
              <label htmlFor="name" className="col-form-label">
                Name
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter Your Name here"
                onChange={handleChange}
                value={reservation.name}
                required
              />
            </div>
          </div>
          <div className="row g-3 align-items-center m-1">
            <div className="col">
              <label htmlFor="resDate" className="col-form-label">
                Choose date
              </label>
            </div>
            <div className="col">
              <input
                type="date"
                id="resDate"
                className="form-control"
                onChange={handleChange}
                value={reservation.resDate}
                required
              />
            </div>
          </div>
          <div className="row g-3 align-items-center m-1">
            <div className="col">
              <label htmlFor="resTime" className="col-form-label">
                Choose time
              </label>
            </div>
            <div className="col">
              <select
                id="resTime"
                className="form-select"
                onChange={handleChange}
                value={reservation.resTime}
                required
              >
                <option defaultValue>Select Time</option>
                {availableTimes.map((time) => {
                  return <option key={time.id}>{time.time}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row g-3 align-items-center m-1">
            <div className="col">
              <label htmlFor="guests" className="col-form-label">
                Number of guests
              </label>
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="1 - 10"
                min="1"
                max="10"
                id="guests"
                className="form-control"
                onChange={handleChange}
                value={reservation.guests}
                required
              />
            </div>
          </div>
          <div className="row g-3 align-items-center m-1">
            <div className="col">
              <label htmlFor="occasion" className="col-form-label">
                Occasion
              </label>
            </div>
            <div className="col">
              <select
                id="occasion"
                className="form-select"
                onChange={handleChange}
                value={reservation.occasion}
                required
              >
                <option defaultValue>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleClick}
            >
              Make reservation
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm
