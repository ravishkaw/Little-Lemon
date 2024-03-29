import { pageLinks, socialLinks } from "../data";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="row pt-5 pb-2 mt-5 border-top text-center"
    >
      <div className="col-md-3 col-sm-6 mb-3">
        <img src={logo} alt="footer-img" />
      </div>
      <div className="col-md-3 col-sm-6 mb-3">
        <h4>Navigation</h4>
        <ul className="navbar-nav ms-auto">
          {pageLinks.map((links) => {
            return (
              <li className="nav-item" key={links.id}>
                <a className="nav-link p-0" href={links.href}>
                  {links.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-3 col-sm-6">
        <h4>Contact</h4>
        <p>1536 N Milwaukee Ave, Chicago, IL 60622</p>
        <p>(773) 384-8060</p>
        <p>info@littlelemonchicago.com</p>
      </div>

      <div className="col-md-3 col-sm-6">
        <h4>Social Media</h4>
        <ul className="navbar-nav ms-auto">
          {socialLinks.map((links) => {
            return (
              <li className="nav-item" key={links.id}>
                <a className="nav-link p-0" href={links.href}>
                  {links.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-center mt-3">
        © {new Date().getFullYear()} Ravishka Wijerathne. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
