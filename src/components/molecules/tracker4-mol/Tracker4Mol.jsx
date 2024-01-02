import FetchData from '../../../services/FetchData';
import Tracker4Atom from '../../atoms/tracker4-atom/Tracker4Atom';
import './tracker4Mol.css';

const Tracker4Mol = () => {
  const countryIds = ['US', 'ES', 'IT', 'IN', 'GB', 'FR', 'DE', 'RU', 'TR'];
  const { data: data} = FetchData('countries');

  return (
    <>
      <h1>Covid-19 Country Wise - Tabs</h1>
      <div className='tracker4-container'>    
    <div className="tracker4-row">
    {data ? (
          countryIds.map((countryId, index) => (
            <Tracker4Atom key={index} countryData={data.find(item => item.countryInfo.iso2 === countryId)} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
    </>
  );
}

export default Tracker4Mol;
