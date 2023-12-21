import "./navbar.css"
import coronavirus from "../../assets/img/coronavirus.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    return (
<<<<<<< HEAD
        // <nav>
        //     <div>
        //         <button>
        //             <img src={coronavirus} alt="coronavirus" />
        //         </button>
        //     </div>
        //     <div>
        //         <button>
        //             {/* <FontAwesomeIcon icon={faChartPie} style={{color: "#3639ae",}} /> */}
        //             <i className="bi bi-pie-chart" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-list" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-grid" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-folder" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-layers" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-graph-up-arrow" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-globe" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //         <button>
        //             <i className="bi bi-chat-left" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //     </div>
        //     <div>
        //         <button>
        //             <i className="ti-comment" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //     </div>

        //     <div>
        //         <button>
        //             <i className="bi bi-pause-circle" style={{ color: "#3939ae", }}>

        //             </i>
        //         </button>
        //     </div>
        // </nav>


        <nav class="navigation">
            <div class="container pl-0 pr-0">
                <div class="nav-content" tabindex="0" style="overflow: hidden; outline: none;">
                    <ul>
                        <li class="logo"><a href="home-1.html"><img src={coronavirus} alt="coronavirus" /></a></li>
                        <li><a href="#" class="active nav-content-bttn" data-tab="chats"><span class="circle-icon bg-warning"></span><i class="ti-pie-chart"></i></a></li>
                        <li><a href="#" class="nav-content-bttn" data-tab="table"><span class="circle-icon bg-danger"></span><i class="ti-view-list"></i></a></li>
                        <li><a href="#" class="nav-content-bttn" data-tab="tiles"><i class="ti-view-grid"></i></a></li>
                        <li><a href="#" class="nav-content-bttn" data-tab="country-wise"><i class="ti-layout-tab"></i></a></li>
                        <li><a href="#" class="nav-content-bttn" data-tab="widgets"><i class="ti-layers-alt"></i></a></li>
                        <li><a href="#" class="nav-content-bttn" data-tab="charts"><i class="ti-stats-up"></i></a></li>
                        <li><a href="#" class="nav-content-bttn" data-tab="continent" id="continentTab"><i class="ti-world"></i></a></li>
                        <li class="flex-lg-brackets"><a href="#" data-tab="blog" class="nav-content-bttn"><i class="ti-comment"></i></a></li>
                        <li class="night-mode"><a href="#"><i class="ti-flickr-alt"></i></a></li>
                    </ul>
=======

        <nav>
            <div>
                <div className="nav-container">
                    <div className="logo"><a href="#"><img className="animate-spin" src={coronavirus} alt="coronavirus"/></a></div>
               
                    <ul className="nav-items-container">
                        <li><a href="#" className="active nav-content-bttn" data-tab="chats"><i className="bi bi-pie-chart"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="table"><i className="bi bi-list"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="tiles"><i className="bi bi-grid"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="country-wise"><i className="bi bi-folder"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="widgets"><i className="bi bi-layers"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="charts"><i className="bi bi-graph-up-arrow"></i></a></li>
                        <li><a href="#" className="nav-content-bttn" data-tab="continent" id="continentTab"><i className="bi bi-globe"></i></a></li>
                        <li><a href="#" data-tab="blog" className="nav-content-bttn"><i className="bi bi-chat-left"></i></a></li>
                    </ul>
                    <div className="last-icon-nav"><li><a href="#" data-tab="blog" className="nav-content-bttn"><i className="bi bi-pause-circle"></i></a></li>
                    </div>

>>>>>>> c3c51b8e448dd05077bb46c7ce398eaf4c29c8e9
                </div>
            </div>
        </nav>



    )
}

export default Navbar