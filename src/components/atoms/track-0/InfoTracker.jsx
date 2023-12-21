import FetchData from '../../../services/FetchData';
import './infoTracker.css';

const InfoTracker = () => {
  const apiEndpoint = 'all';
  const { data, error } = FetchData(apiEndpoint);

  return (
    <>
      {error ? (
        <h1>Error: {error.message}</h1>
      ) : (
        data && (
          <div className='infoTracker-card'>
            <div className='title-container'><h6>Total Case</h6></div>
            <div className='cases-container'>
            <p className='today-cases-container'>+{data.todayCases} </p>
            <div className='total-cases-container'><h6>{data.cases}</h6></div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default InfoTracker;
