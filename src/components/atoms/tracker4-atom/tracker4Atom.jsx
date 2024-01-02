import PropTypes from 'prop-types';
import './tracker4Atom.css';

const Tracker4Atom = ({ countryData }) => {
    return (
        <>
            {countryData ? (
                <div className='tracker4-card'>
                 
                        <img src={countryData.countryInfo.flag} alt="country flag" />
                        <h6>{countryData.country} </h6>
                                 
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

Tracker4Atom.propTypes = {
  countryData: PropTypes.object,
};

export default Tracker4Atom;
