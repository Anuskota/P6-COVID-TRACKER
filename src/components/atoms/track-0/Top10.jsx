
import FetchData from '../../../services/FetchData';
import './top10.css';

const Top10 = () => {
      const apiEndpoint = 'countries'; 
      const { data, error } = FetchData(apiEndpoint);

    return (
        <>
            {error ? (
                <h1>Error: {error.message}</h1>
            ) : (
                data && 
                <div className='top10-card'>
                    <div><img src={data[0].countryInfo.flag} alt="" /></div>
                    <div><h4>{data[0].country} </h4></div>
                    <div><h4>{data[0].cases} </h4></div>

                </div>
            )}
        </>
    );
};

export default Top10;
