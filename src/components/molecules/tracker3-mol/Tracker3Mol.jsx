import TopTen from '../../../services/TopTen';
import Tracker3Atom from '../../atoms/tracker3-atom/Tracker3Atom';
import './tracker3Mol.css';

const Tracker3Mol = () => {
  const {
    topTenCases,
    topTenTodayCases,
    topTenTodayDeaths,
    topTenTodayDeathsLow,
    topTenTopActive,
    topTenRecovered,
  } = TopTen();

  return (
    <>
    <div className="tracker3-container">
    <h1 className='tracker3-container-h1'>Top 10 Country wise Covid-19 Updates - Tiles</h1>
      <div className='tracker3-row'>
    <div className="tracker3-column">
      <h4>Top Cases</h4>
    {topTenCases.length > 0 ? (
        topTenCases.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} dataKey="cases"/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>  
    <div className="tracker3-column">
      <h4>Today Cases</h4>
    {topTenTodayCases.length > 0 ? (
        topTenTodayCases.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} dataKey="todayCases"/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>  
    <div className="tracker3-column">
      <h4>Today Deaths</h4>
    {topTenTodayDeaths.length > 0 ? (
        topTenTodayDeaths.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} dataKey="todayDeaths"/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>  
    <div className="tracker3-column">
      <h4>Today Deaths</h4>
    {topTenTodayDeathsLow.length > 0 ? (
        topTenTodayDeathsLow.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} dataKey="todayDeaths"/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>  
    <div className="tracker3-column">
      <h4>Active</h4>
    {topTenTopActive.length > 0 ? (
        topTenTopActive.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} dataKey="active"/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>  
    <div className="tracker3-column">
      <h4>Recovered</h4>
    {topTenRecovered.length > 0 ? (
        topTenRecovered.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} dataKey="recovered"/>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div> 
    </div>

    </div>
      
    </>
  );
}

export default Tracker3Mol;
