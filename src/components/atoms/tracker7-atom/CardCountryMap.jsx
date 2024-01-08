import PropTypes from "prop-types";
import "./cardCountryMap.css";

const CardCountryMap = ({ countryData }) => {
  return (
    <>
      {countryData ? (
        <div className={`tracker7-card`}>
          <img src={countryData.countryInfo.flag} alt="country flag" />
          <h6>{countryData.country}</h6>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

CardCountryMap.propTypes = {
  countryData: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CardCountryMap;
