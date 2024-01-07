import "./navbarHome.css";
import logoBlue from "../../../assets/img/logo.png"
import logoWhite from "../../../assets/img/logo-white.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const NavbarHome = () => {
  return (
    <nav>
      <nav className=" navbar navbar-expand-lg bg-body navbar-light bg-light  ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className="image-covid ">
              <img className="ms-5" src={logoBlue}></img >
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-grid gap-5 d-md-flex ">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu fade slide show" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home One
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Two
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Three
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Four
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Five
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Dark One
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Dark Two
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Dark Three
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Dark Four
                    </a>
                  </li><li>
                    <a className="dropdown-item" href="#">
                      Home Dark Five
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Onepage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Onepage Dark
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tracker
                    </a>
                  </li>
                </ul>
              </li>
              

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Prevention
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Qurantine
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu fade slide show" aria-labelledby="navbarDropdown" >
                  <li>
                    <a className="dropdown-item" href="#">
                      Hand Wash
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Social Distance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     Blog Details
                    </a>
                  </li>
                </ul>
                
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Help
                </a>
              </li>
              
                <button className="btn btn-primary d-none d-lg-block" role="button">
                Tracker
                </button>
            </ul>
            
            
              
              
            
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavbarHome;

