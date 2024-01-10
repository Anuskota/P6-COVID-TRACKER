import "./header.css"
import mobileApp from "../../../assets/img/phones.png"
import timeBrand from "../../../assets/img/b-2.png"
import oceanBrand from "../../../assets/img/b-3.png"
import alberoBrand from "../../../assets/img/b-4.png"
import doraBrand from "../../../assets/img/b-5.png"
import greenTurtleBrand from "../../../assets/img/b-6.png"

const Header = () => {
    return (
        <>
            <div className="container container-header">
                <div className="row justify-content-between align-items-center">

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="hero-content">
                            <h1>Download the covid app for get latest update</h1>
                            <p>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories arount the world and 2 international conveyances.</p>
                            <a href="#" className="btn btn-primary btn-lg mt-3">How To Protect</a>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 text-right">
                        <div className="hero-img text-right text-md-center">
                            <img src={mobileApp} alt="Image of the application displayed on a mobile phone" />
                        </div>
                    </div>

                </div>
            </div>
        
        <div className="brand-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 bg-white">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
                                <img src={timeBrand} alt="Time brand" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
                                <img src={oceanBrand} alt="Ocean brand" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
                                <img src={alberoBrand} alt="Albero brand" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
                                <img src={doraBrand} alt="Dora brand" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
                                <img src={greenTurtleBrand} alt="Green Turtle brand" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
                                <img src={timeBrand} alt="Time brand" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
  }

export default Header