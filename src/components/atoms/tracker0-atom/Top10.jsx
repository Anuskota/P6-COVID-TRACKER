import PropTypes from 'prop-types';
import './top10.css';

const Top10 = ({ countryData }) => {
    return (
        <>
            {countryData ? (
                <div className='top10-card'>
                    <div>
                        <img src={countryData.countryInfo.flag} alt="country flag" />
                        <span>{countryData.country} </span>
                    </div>                    
                    <div><h6>{countryData.cases} </h6></div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

Top10.propTypes = {
    countryData: PropTypes.object, // Alterado para aceitar um objeto diretamente
};

export default Top10;
