// Tracker3Atom.js
import PropTypes from 'prop-types';
import './tracker3Atom.css';

const Tracker3Atom = ({ countryData, dataKey }) => {
  const displayData = countryData ? countryData[dataKey] : 'Loading...';

  return (
    <>
      {countryData ? (
        <div className='tracker3-card'>
          <div>
            <img src={countryData.countryInfo.flag} alt="country flag" />
          </div>
          <div className='tracker3-card-content-data'>
            <span>{countryData.country} </span>
            <h6>{displayData}</h6>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

Tracker3Atom.propTypes = {
  countryData: PropTypes.object,
  dataKey: PropTypes.string.isRequired, 
};

export default Tracker3Atom;
