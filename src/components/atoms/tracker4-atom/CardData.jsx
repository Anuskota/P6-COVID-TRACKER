import PropTypes from "prop-types";
import "./cardData.css";
import covidDefault from "../../../assets/img/covid-defult.svg";
import covidRedDark from "../../../assets/img/covid-redark.svg";
import covidRed from "../../../assets/img/covid-red.svg";
import covidOrange from "../../../assets/img/covid-orange.svg";
import covidGreen from "../../../assets/img/covid-green.svg";
import covidBlue from "../../../assets/img/covid-blue.svg";


function CardData({ countryData }) {
  return (
    <>
      <div className="cards-container">
        {countryData ? (
          <>
            <div className="cardData cardCases">
              <h5>Total Cases</h5>
              <h3>{countryData.cases}</h3>
              <img className="cardCases" src={covidDefault} alt="coronavirus"/>
            </div>

            <div className="cardData cardDeaths">
              <h5>Total Deaths </h5>
              <h3>{countryData.deaths}</h3>
              <img className="cardDeaths" src={covidRed} alt="coronavirus"/>
            </div>

            <div className="cardData cardRecovered">
              <h5>Total Recovered</h5>
              <h3>{countryData.recovered}</h3>
              <img className="cardRecovered" src={covidGreen} alt="coronavirus"/>
            </div>

            <div className="cardData cardActive">
              <h5>Total Active</h5>
              <h3>{countryData.active}</h3>
              <img className="cardActive" src={covidBlue} alt="coronavirus"/>
            </div>

            <div className="cardData cardNewCases">
              <h5>New Cases</h5>
              <h3>{countryData.todayCases}</h3>
              <img className="cardNewCases" src={covidOrange} alt="coronavirus"/>
            </div>

            <div className="cardData cardNewDeaths">
              <h5>New Deaths</h5>
              <h3>{countryData.todayDeaths}</h3>
              <img className="cardNewDeaths" src={covidRedDark} alt="coronavirus"/>
            </div>
          </>
        ) : (
          <h1>No country selected</h1>
        )}
      </div>
    </>
  );
}

CardData.propTypes = {
  countryData: PropTypes.object,
};

export default CardData;
