import heroImg from "../assets/restauranfood.jpg";
import { Routes, Route, Link } from "react-router-dom";
import Reservation from "./Reservation/Reservation";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container p-3">
        <div className="row align-items-center">
          <div className="col">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn btn-warning" type="button">
              <Link to="/reservations" className="nav-link">
                Reserve a table
              </Link>
            </button>
          </div>
          <div className="col text-center">
            <img
              className="img-fluid rounded mx-auto"
              src={heroImg}
              alt="hero"
              width="200px"
            />
          </div>
        </div>
        <Routes>
          <Route path="/reservations" element={<Reservation />}></Route>
        </Routes>
      </div>
    </section>
  );
};
export default Hero;
