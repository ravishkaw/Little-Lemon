
import img2 from "../assets/Mario and Adrian A.jpg";

const About = () => {
  return (
    <section id="about" className="container">
      <h1 className="text-center">About Us</h1>
      <div className="row my-5 align-items-center">
        <div className="col-md-6">
          <img src={img2} alt="" width="100px" />
        </div>
        <div className="col-md-6 mt-sm-3">
          <p>
            Welcome to Little Lemon Restaurant, where we take pride in our
            heritage as a family-owned Mediterranean establishment. Our passion
            lies in blending time-honored recipes with innovative twists,
            offering you a dining experience that celebrates the rich flavors of
            the Mediterranean with a modern touch. Join us as we invite you to
            savor the essence of tradition infused with a refreshing zest at
            every bite.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
