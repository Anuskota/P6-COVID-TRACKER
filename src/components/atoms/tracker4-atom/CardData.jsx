import PropTypes from "prop-types";
import "./cardData.css";

function CardData({ countryData }) {
  return (
    <>
      <div className="cards-container">
        {countryData ? (
          <>
            <div className="cardData cardCases">
              <h5>Total Cases</h5>
              <h3>{countryData.cases}</h3>

            </div>

            <div className="cardData cardDeaths">
              <h5>Total Deaths </h5>
              <h3>{countryData.deaths}</h3>
            </div>

            <div className="cardData cardRecovered">
              <h5>Total Recovered</h5>
              <h3>{countryData.recovered}</h3>
            </div>

            <div className="cardData cardActive">
              <h5>Total Active</h5>
              <h3>{countryData.active}</h3>
            </div>

            <div className="cardData cardNewCases">
              <h5>New Cases</h5>
              <h3>{countryData.todayCases}</h3>
            </div>

            <div className="cardData cardNewDeaths">
              <h5>New Deaths</h5>
              <h3>{countryData.todayDeaths}</h3>
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
