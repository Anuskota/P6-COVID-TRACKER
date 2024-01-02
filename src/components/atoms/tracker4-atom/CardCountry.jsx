import PropTypes from 'prop-types';
import './cardCountry.css';
import UseData from "../../../hooks/UseData";

const CardCountry = ({ countryData }) => {
    const [handleClick] = UseData(dataDefault)
    return (
        <>
            {countryData ? (
                <div className='tracker4-card' onClick={handleClick}>

                        <img src={countryData.countryInfo.flag} alt="country flag" />
                        <h6>{countryData.country} </h6>
                                 
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

CardCountry.propTypes = {
  countryData: PropTypes.object,
};

export default CardCountry;
