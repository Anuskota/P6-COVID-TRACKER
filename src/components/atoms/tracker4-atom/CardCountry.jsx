import PropTypes from 'prop-types';
import './cardCountry.css';

const CardCountry = ({ countryData, onClick }) => {
    return (
        <>
            {countryData ? (
                <button className='tracker4-card' onClick={() => onClick(countryData.countryInfo.iso2)}>
                    <img src={countryData.countryInfo.flag} alt="country flag" />
                    <h6>{countryData.country}</h6>
                </button>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

CardCountry.propTypes = {
    countryData: PropTypes.object,
    onClick: PropTypes.func,
};

export default CardCountry;
