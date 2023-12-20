import "./navbar.css"
import coronavirus from "../../assets/img/coronavirus.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    return (

        <nav>
            <div>
                <div className="nav-container">
                    <ul className="nav-items-container">
                        <li className="logo"><a href="#"><img src={coronavirus} alt="coronavirus"/></a></li>
                        <li><a href="#" className="active nav-content-bttn" data-tab="chats"><i className="bi bi-pie-chart"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="table"><i className="bi bi-list"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="tiles"><i className="bi bi-grid"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="country-wise"><i className="bi bi-folder"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="widgets"><i className="bi bi-layers"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="charts"><i className="bi bi-graph-up-arrow"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="continent" id="continentTab"><i className="bi bi-globe"></i></a></li>
                        <li className="flex-lg-brackets"><a href="#" data-tab="blog" className="nav-content-bttn"><i className="bi bi-chat-left"></i></a></li>
                        <li className="nav-content-bttn"><a href="#"><i className="bi bi-pause-circle"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar