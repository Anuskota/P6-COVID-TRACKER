import "./navbarHome.css";
import logoBlue from "../../../assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavbarHome = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 w-100">
          <nav>
            <div className=" navbar navbar-expand-lg bg-body navbar-light bg-light">
              <div className="image-covid col-4 col-lg-4 col-md-6">
                <img className="ms-5 img-fluid" src={logoBlue}></img>
              </div>
              <div className="col-lg-8 col-md-6">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                      >
                        Home
                      </a>
                      <div className="dropdown-menu dropdown-home">
                        <a className="dropdown-item" href="#">
                          Home One
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Two
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Three
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Four
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Five
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Dark One
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Dark Two
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Dark Three
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Dark Four
                        </a>

                        <a className="dropdown-item" href="#">
                          Home Dark Five
                        </a>

                        <a className="dropdown-item" href="#">
                          Onepage
                        </a>

                        <a className="dropdown-item" href="#">
                          Onepage Dark
                        </a>

                        <a className="dropdown-item" href="#">
                          Tracker
                        </a>
                      </div>
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
                    <li className="nav-item dropdown ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu dropdown-pages">
                        <a className="dropdown-item" href="#">
                          Hand Wash
                        </a>

                        <a className="dropdown-item" href="#">
                          Social Distance
                        </a>

                        <a className="dropdown-item" href="#">
                          Blog
                        </a>

                        <a className="dropdown-item" href="#">
                          Blog Details
                        </a>
                      </div>
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
                    <div className="singin-btn">
                      <a
                        className="btn btn-primary d-none d-lg-block"
                        role="button"
                      >
                        Tracker
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
