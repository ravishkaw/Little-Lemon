import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h1 className="text-center mb-5">Testimonials</h1>
        <div className="row">
          {testimonials.map((testimonials) => {
            const { id, name, image, rating, review } = testimonials;
            return (
              <div className="col-md-3 col-sm-6 mb-3" key={id}>
                <div className="card p-2 h-100">
                  <div className="testimonial-card">
                    <div className="row ">
                      <div className="col">
                        <img src={image} alt="person-img" />
                      </div>
                      <div className="col">
                        <h4>{name}</h4>
                        <h6>{rating}⭐</h6>
                      </div>
                    </div>
                    <p>{review}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
