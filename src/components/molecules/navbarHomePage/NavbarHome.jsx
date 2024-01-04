import "./navbarHome.css";
import logoBlue from "../../../assets/img/coronavirus.png"
import logoWhite from "../../../assets/img/logo-white.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavbarHome = () => {
  return (
    <nav>
      <div className="header-wrapper fixed">
        <div className="container-navbar">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand logo-white" href="#">
                    <img src={logoWhite} alt="logo white covid" className="img-fluid" />
                  </a>
                  <a className="navbar-brand logo-dark" href="#">
                    <img src={logoBlue} alt="logo blue covid" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#"id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="">Home One</a></li>
                                                <li><a className="dropdown-item" href="">Home Two</a></li>
                                                <li><a className="dropdown-item" href="">Home Three</a></li>
                                                <li><a className="dropdown-item" href="">Home Four</a></li>
                                                <li><a className="dropdown-item" href="">Home Five</a></li>
                                                <li><a className="dropdown-item" href="">Home Dark One</a></li>
                                                <li><a className="dropdown-item" href="">Home Dark Two</a></li>
                                                <li><a className="dropdown-item" href="">Home Dark Three</a></li>
                                                <li><a className="dropdown-item" href="">Home Dark Four</a></li>
                                                <li><a className="dropdown-item" href="">Home dark Five</a></li>
                                                <li><a className="dropdown-item" href="">Onepage</a></li>
                                                <li><a className="dropdown-item" href="">Onepage Dark</a></li>
                                                <li><a className="dropdown-item" href="">Tracker</a></li>
                          </ul>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="">Prevention</a></li>
                      <li className="nav-item"><a className="nav-link" href="">Qurantine</a></li>
                      <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="">Hand Wash</a></li>
                                                <li><a className="dropdown-item" href="">SocialDistance</a></li>
                                                <li> <a className="dropdown-item" href="">Blog</a></li>
                                                <li><a className="dropdown-item" href="">Blog Details</a></li>
                                            </ul>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="">About</a></li>
                      <li className="nav-item"><a className="nav-link" href="">Help</a></li>
                    </ul>
                  </div>
                  <div className="singin-btn"></div>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>  
      
    </nav>
  );
};

export default NavbarHome;
