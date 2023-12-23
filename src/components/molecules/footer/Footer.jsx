import "./footer.css";
import logo from "../../../assets/img/logo-white.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer>
        <div className="higher-footer">
      <div className="icons-footer-container">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <p>
          These droplets can land on objects and surfaces around the person such
          as tables, doorknobs and handrails.
        </p>
        <ul className="icons-list">
          <li><i className="bi bi-facebook"></i></li>
          <li><i className="bi bi-twitter"></i></li>
          <li><i className="bi bi-linkedin"></i></li>
          <li><i className="bi bi-youtube"></i></li>
        </ul>
      </div>
      <div className="list-footer-container">
        <div className="list-footer-content">
          <h4>Quick Links</h4>
          <ul>
            <li>Prevention</li>
            <li>Quarantine</li>
            <li>About</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="list-footer-content">
          <h4>About</h4>
          <ul>
            <li>Hand Wash</li>
            <li>Social Distance</li>
            <li>Isolate</li>
            <li>Difference</li>
          </ul>
        </div>
        <div className="list-footer-content">
          <h4>About</h4>
          <ul>
            <li>Hand Wash</li>
            <li>Social Distance</li>
            <li>Isolate</li>
            <li>Difference</li>
          </ul>
        </div>
        <div className="list-footer-content">
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
        <p>© Copyright 2020. All Rights Reserved</p>
        <p>Design by <a>DexignZone</a></p>
      </div>     
    </footer>
  );
};

export default Footer;
