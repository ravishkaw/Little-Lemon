import ReservationForm from "./ReservationForm";
import BookingConfirm from "./BookingConfirm";
import { useState } from "react";

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  const handleSubmit = (data) => {
    setReservationData(data);
    setSubmitted(true);
  };

  return (
    <>
      <h1 className="text-center">Reservation</h1>
      <div className="container mt-4">
        {!submitted ? (
          <ReservationForm onSubmit={handleSubmit} />
        ) : (
          <BookingConfirm {...reservationData} />
        )}
      </div>
    </>
  );
};

export default Reservation;
