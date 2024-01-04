import "./navbarHome.css";
import logoBlue from "../../../assets/img/coronavirus.png"
import logoWhite from "../../../assets/img/logo-white.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavbarHome = () => {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavbarHome;

