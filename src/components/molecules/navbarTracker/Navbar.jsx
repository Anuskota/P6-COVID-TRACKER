import "./navbar.css"
import coronavirus from "../../../assets/img/coronavirus.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
<>
        <nav>
            <div>
                <div className="nav-container">
                <div>
                    <div className="logo">
                        <NavLink to="/"><img className="animate-spin" src={coronavirus} alt="coronavirus"/></NavLink>
                    </div>
                    <ul className="nav-items-container">
                        <li><NavLink to="/tracker" className="active nav-content-bttn" data-tab="chats"><i className="bi bi-pie-chart"></i></NavLink></li>
                        <li><NavLink to="/tracker2" className="nav-content-bttn" data-tab="table"><i className="bi bi-list"></i></NavLink></li>
                        <li><NavLink to="/tracker3" className="nav-content-bttn" data-tab="tiles"><i className="bi bi-grid"></i></NavLink></li>
                        <li><NavLink to="/tracker4" className="nav-content-bttn" data-tab="country-wise"><i className="bi bi-folder"></i></NavLink ></li>
                        <li><NavLink to="/tracker5" className="nav-content-bttn" data-tab="widgets"><i className="bi bi-layers"></i></NavLink></li>
                        <li><NavLink to="/tracker6" className="nav-content-bttn" data-tab="charts"><i className="bi bi-graph-up-arrow"></i></NavLink></li>
                        <li><NavLink to="/tracker7" className="nav-content-bttn" data-tab="continent" id="continentTab"><i className="bi bi-globe"></i></NavLink></li>
                        <li><NavLink to="/tracker8" data-tab="blog" className="nav-content-bttn"><i className="bi bi-chat-left"></i></NavLink></li>
                    </ul>
                    </div>
                    <div className="last-icon-nav"><li><NavLink to="#" data-tab="blog" className="nav-content-bttn"><i className="bi bi-pause-circle"></i></NavLink></li>
                    </div>

                </div>
            </div>
        </nav>

        </>

    )
}

export default Navbar