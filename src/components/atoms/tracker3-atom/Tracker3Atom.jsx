import PropTypes from 'prop-types';
import './tracker3Atom.css';

const Tracker3Atom = ({ countryData }) => {
    return (
      <>
        {countryData ? (
          <div className='tracker3-card'>

              <div>
              <img src={countryData.countryInfo.flag} alt="country flag" />
              </div>

             <div className='tracker3-card-content-data'>
              <span>{countryData.country} </span>
              <h6>{countryData.cases}</h6>
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
  };
  
  export default Tracker3Atom;