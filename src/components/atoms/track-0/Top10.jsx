
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
                    <div>
                        <img src={data[0].countryInfo.flag} alt="" />
                        <span>{data[0].country} </span>
                    </div>                    
                    <div><h6>{data[0].cases} </h6></div>
                </div>
            )}
        </>
    );
};

export default Top10;
