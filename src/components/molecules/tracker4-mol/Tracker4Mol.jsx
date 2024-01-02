import FetchData from '../../../services/FetchData';
import CardCountry from '../../atoms/tracker4-atom/CardCountry';
import CardData from '../../atoms/tracker4-atom/CardData';
import './tracker4Mol.css';
import UseData from '../../../hooks/UseData';

const Tracker4Mol = () => {
  const countryIds = ['US', 'ES', 'IT', 'IN', 'GB', 'FR', 'DE', 'RU', 'TR'];
  const { data: data} = FetchData('countries');
  const [buttonChange] = UseData(dataDefault)

  return (
    <>
      <h1>Covid-19 Country Wise - Tabs</h1>
      <div className='tracker4-container'>    
    <div className="tracker4-row">
    {data ? (
          countryIds.map((countryId, index) => (
            <>
            <CardCountry key={index} countryData={data.find(item => item.countryInfo.iso2 === countryId)} />
            </>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    <div className="tracker4-row" card_content = {data ? (
          countryIds.map((countryId, index) => (
            <>
            <CardData key={index} countryData={data.find(item => item.countryInfo.iso2 === countryId)}/>
            </>
          ))
        ) : (
          <h1>Loading...</h1>
        )} >
    
    </div>
    </div>
    </>
  );
}

export default Tracker4Mol;
