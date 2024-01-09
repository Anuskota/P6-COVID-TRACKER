import "./footer.css";
import logo from "../../../assets/img/logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container p-5 higher-footer">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-8 logo-container">
            <div>
              <img src={logo} alt="logo"></img>
            </div>
            <p>
              These droplets can land on objects and surfaces around the person
              such as tables, doorknobs and handrails.
            </p>
            <ul className="icons-list">
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-twitter"></i>
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
              </li>
              <li>
                <i className="bi bi-youtube"></i>
              </li>
            </ul>
          </div>
     
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 list-footer-content">
              <h4>Quick Links</h4>
              <ul>
                <li>Prevention</li>
                <li>Quarantine</li>
                <li>About</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 list-footer-content">
              <h4>About</h4>
              <ul>
                <li>Hand Wash</li>
                <li>Social Distance</li>
                <li>Isolate</li>
                <li>Difference</li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 list-footer-content">
              <h4>About</h4>
              <ul>
                <li>Hand Wash</li>
                <li>Social Distance</li>
                <li>Isolate</li>
                <li>Difference</li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 list-footer-content">
              <h4>Help</h4>
              <ul>
                <li>Hand Wash</li>
                <li>Social Distance</li>
                <li>Isolate</li>
                <li>Difference</li>
              </ul>
    
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"><p>© Copyright 2020. All Rights Reserved</p></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">  <p>Design by<a>DexignZone</a></p></div>
          </div>
        </div>      
      </div>
    </footer>
  );
};

export default Footer;