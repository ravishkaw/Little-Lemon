const BookingConfirm = (props) => {
  const { name, resDate, resTime, guests, occasion } = props;
  return (
    <section className="booking-form container">
      <div>
        <h3>Reservation Confirmed</h3>
        <p>Name : {name}</p>
        <p>Date : {resDate}</p>
        <p>Time : {resTime}</p>
        <p>Number of Guests : {guests}</p>
        <p>Occasion : {occasion}</p>
      </div>
    </section>
  );
};
export default BookingConfirm;
