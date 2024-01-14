import PropTypes from "prop-types";
import "./cardDataGlobal.css";
import covidDefault from "../../../assets/img/covid-defult.svg";
import covidGreen from "../../../assets/img/covid-green.svg";
import covidRed from "../../../assets/img/covid-red.svg";
import covidRedDark from "../../../assets/img/covid-redark.svg";
import telephone from "../../../assets/img/telephone.svg";
import FetchData from "../../../services/FetchData";

const CardDataGlobal = () => {
  const apiEndpoint = "all";
  const { data, error } = FetchData(apiEndpoint);

  return (
    <>
      {error ? (
        <h1>Error: {error.message}</h1>
      ) : (
        data && (

          <div className="cards-global-container">
            <div className="cardGlobal" key="total-confirmed">
              <img src={covidDefault} alt="coronavirus" />
              <div className="data-container">
              <h6>Total Confirmed</h6>
              <h4>{data.cases}</h4>
              </div>
            </div>

            <div className="cardGlobal" key="total-recovered">
              <img src={covidGreen} alt="coronavirus" />
              <div className="data-caontainer">
              <h6>Total Recovered</h6>
              <h4>{data.recovered}</h4>
              </div>          
            </div>

            <div className="cardGlobal" key="total-deaths">
              <img src={covidRed} alt="coronavirus" />
              <div className="data-container">
              <h6>Total Deaths</h6>
              <h4>{data.deaths}</h4>
              </div>
            </div>

            <div className="cardGlobal" key="new-deaths">
              <img src={covidRedDark} alt="coronavirus" />
              <div className="data-container">
              <h6>New Deaths</h6>
              <h4>{data.todayDeaths}</h4>
              </div>
            </div>

            <div className="cardGlobal" key="help-line">
              <img src={telephone} alt="coronavirus" />
              <div className="data-container">
              <h6>Help Line No.</h6>
              <h4>198</h4>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

CardDataGlobal.propTypes = {
  countryData: PropTypes.object,
};

export default CardDataGlobal;
