import PropTypes from "prop-types";
// import "./cardDataGlobal.css";
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
        data && [
          <div className="cards-global-container">
            
            <div className="cardGlobal">
              <img src={covidDefault} alt="coronavirus" />
              <h6>Total Confirmed</h6>
              <h4>{data.cases}</h4>
            </div>

            <div className="cardGlobal">
              <img src={covidGreen} alt="coronavirus" />
              <h6>Total Recovered</h6>
              <h4>{data.recovered}</h4>
            </div>

            <div className="cardGlobal">
              <img src={covidRed} alt="coronavirus" />
              <h6>Total Deaths</h6>
              <h4>{data.deaths}</h4>
            </div>

            <div className="cardGlobal">
              <img src={covidRedDark} alt="coronavirus" />
              <h6>New Deaths</h6>
              <h4>{data.todayDeaths}</h4>
            </div>

            <div className="cardGlobal">
              <img src={telephone} alt="coronavirus" />
              <h6>Help Line No.</h6>
              <h4>198</h4>
            </div>

          </div>
        ]
      )}
    </>
  );
};

CardDataGlobal.propTypes = {
    countryData: PropTypes.object,
};

export default CardDataGlobal