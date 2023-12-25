import FetchData from '../../../services/FetchData';
import Tracker3Atom from '../../atoms/tracker3-atom/Tracker3Atom';
import './tracker3Mol.css';

const Tracker3Mol = () => {
  const { data: data, error: top10Error } = FetchData('countries');
  if (top10Error) {
    return <h1>Error loading data</h1>;
  }

  const sortedData = data ? data.slice().sort((a, b) => b.cases - a.cases) : [];
  
  const topTenCountries = sortedData.slice(0, 10);
  console.log(topTenCountries)
  return (
    <>
    <div className='tracker3-container'>
      <h1>Top 10 Country wise Covid-19 Updates - Tiles</h1>
    <div className="tracker3-column">
      <h4>Top Cases</h4>
    {topTenCountries.length > 0 ? (
        topTenCountries.map((item, index) => (
          <Tracker3Atom key={index} countryData={item} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>  
    </div>
    </>
  );
}

export default Tracker3Mol;
