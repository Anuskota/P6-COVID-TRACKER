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
            <div><h4>{data.cases}</h4></div>
            <div><h4>{data.deaths} </h4></div>
            <div><h4>{data.todayDeaths} </h4></div>
            <div><h4>{data.todayDeaths} </h4></div>
          </div>
        )
      )}
    </>
  );
};

export default InfoTracker;
