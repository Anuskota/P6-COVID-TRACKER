
import { useState, useEffect } from 'react';
import fetchData from '../../services/fetchData';
import './top10.css';

const Top10 = () => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    const apiEndpoint = 'countries'; 

    useEffect(() => {
        fetchData(apiEndpoint) 
        .then((api) => {
            setApiData(api);
        })
        .catch((error) => {
            setError(error);
        });
    }, [apiEndpoint]); 

    return (
        <>
            {error ? (
                <h1>Error: {error.message}</h1>
            ) : (
                apiData && 
                <div className='top10-card'>
                    <div><img src={apiData[0].countryInfo.flag} alt="" /></div>
                    <div><h4>{apiData[0].country} </h4></div>
                    <div><h4>{apiData[0].cases} </h4></div>

                </div>
            )}
        </>
    );
};

export default Top10;
