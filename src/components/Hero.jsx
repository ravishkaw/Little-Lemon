import heroImg from "../assets/restauranfood.jpg";

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
              Reserve a table
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
      </div>
    </section>
  );
};
export default Hero;
