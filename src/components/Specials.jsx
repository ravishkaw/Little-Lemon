import { specialMenu } from "../data";

const Specials = () => {
  return (
    <section id="specials">
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h1>This Weeks Specials !</h1>
          <button className="btn btn-dark">Online Menu</button>
        </div>
        <div className="row">
          {specialMenu.map((special) => {
            const { id, img, title, price, content, href } = special;
            return (
              <div className="col-sm-4 my-3" key={id}>
                <div className="card h-100">
                  <img className="img-fluid" src={img} alt="special menu" />
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-subtitle">${price}</h6>
                    <p className="card-text">{content}</p>
                    <a href={href}>Order a Delivery</a>
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
export default Specials;
