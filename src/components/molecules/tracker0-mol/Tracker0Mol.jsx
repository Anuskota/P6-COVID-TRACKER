import InfoTracker from '../../atoms/tracker0-atom/InfoTracker'
import Top10 from "../../atoms/tracker0-atom/Top10";
import FetchData from '../../../services/FetchData';
import './tracker0Mol.css';

const Tracker0Mol = () => {
  const top10CountryIds = ['US', 'IT', 'GB', 'ES', 'AF', 'AL', 'AD', 'AT', 'BE', 'BO'];

  const { data: top10Data, error: top10Error } = FetchData('countries');

  return (
    <>
      <div className="tracker0">
        <h2>COVID-19 Tracker</h2>
        <InfoTracker/>
        <h4>Top 10 Country</h4>
        {top10Data ? (
          top10CountryIds.map((countryId, index) => (
            <Top10 key={index} countryData={top10Data.find(item => item.countryInfo.iso2 === countryId)} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}

      </div>
    </>
  );
}

export default Tracker0Mol;
  
