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
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
                        <div className="dropdown-menu">
                                                <a className="dropdown-item" href="">Home One</a>
                                                <a className="dropdown-item" href="">Home Two</a>
                                                <a className="dropdown-item" href="">Home Three</a>
                                                <a className="dropdown-item" href="">Home Four</a>
                                                <a className="dropdown-item" href="">Home Five</a>
                                                <a className="dropdown-item" href="">Home Dark One</a>
                                                <a className="dropdown-item" href="">Home Dark Two</a>
                                                <a className="dropdown-item" href="">Home Dark Three</a>
                                                <a className="dropdown-item" href="">Home Dark Four</a>
                                                <a className="dropdown-item" href="">Home dark Five</a>
                                                <a className="dropdown-item" href="">Onepage</a>
                                                <a className="dropdown-item" href="">Onepage Dark</a>
                                                <a className="dropdown-item" href="">Tracker</a>
                                            </div>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="">Prevention</a></li>
                      <li className="nav-item"><a className="nav-link" href="">Qurantine</a></li>
                      <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="">Hand Wash</a>
                                                <a className="dropdown-item" href="">SocialDistance</a>
                                                <a className="dropdown-item" href="">Blog</a>
                                                <a className="dropdown-item" href="">Blog Details</a>
                                            </div>
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
