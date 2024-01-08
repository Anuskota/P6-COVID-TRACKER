import PropTypes from "prop-types";
import "./cardDataMap.css";
import covidDefault from "../../../assets/img/covid-defult.svg";
import covidRed from "../../../assets/img/covid-red.svg";
import covidOrange from "../../../assets/img/covid-orange.svg";
import covidGreen from "../../../assets/img/covid-green.svg";
import covidBlue from "../../../assets/img/covid-blue.svg";


function CardDataMap({ countryData }) {
  return (
    <>
      <div className="cards-container">
        {countryData ? (
          <>
            <div className="cardData colorDefault">
              <h5>Total Cases</h5>
              <h3>{countryData.cases}</h3>
              <img src={covidDefault} alt="coronavirus"/>
            </div>

            <div className="cardData colorOrange">
              <h5>Today Cases</h5>
              <h3>{countryData.todayCases}</h3>
              <img src={covidDefault} alt="coronavirus"/>
            </div>

            <div className="cardData colorRed">
              <h5>Total Deaths </h5>
              <h3>{countryData.deaths}</h3>
              <img src={covidRed} alt="coronavirus"/>
            </div>

            <div className="cardData colorDarkRed">
              <h5>Today Deaths </h5>
              <h3>{countryData.todayDeaths}</h3>
              <img src={covidRed} alt="coronavirus"/>
            </div>

            <div className="cardData colorGreen">
              <h5>Total Recovered</h5>
              <h3>{countryData.recovered}</h3>
              <img src={covidGreen} alt="coronavirus"/>
            </div>

            <div className="cardData colorBlue">
              <h5>Total Active</h5>
              <h3>{countryData.active}</h3>
              <img src={covidBlue} alt="coronavirus"/>
            </div>

            <div className="cardData colorOrange">
              <h5>Critical</h5>
              <h3>{countryData.critical}</h3>
              <img src={covidOrange} alt="coronavirus"/>
            </div>

            <div className="cardData colorDefault">
              <h5>Cases Per Million</h5>
              <h3>{countryData.casesPerOneMillion}</h3>
              <img src={covidOrange} alt="coronavirus"/>
            </div>

            <div className="cardData colorRed">
              <h5>Deaths Per Million</h5>
              <h3>{countryData.deathsPerOneMillion}</h3>
              <img src={covidOrange} alt="coronavirus"/>
            </div>
          </>
        ) : (
          <h1>No country selected</h1>
        )}
      </div>
    </>
  );
}

CardDataMap.propTypes = {
  countryData: PropTypes.object,
};

export default CardDataMap;
