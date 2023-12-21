
import { useState, useEffect } from 'react';
import fetchData from '../../../services/fetchData';
import './infoTracker.css';


const InfoTracker = () => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);


    const apiEndpoint = 'all'; 

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
                <div className='infoTracker-card'>
                    <div><h4>{apiData.cases[1]}</h4></div>
                    <div><h4>{apiData.deaths[2]} </h4></div>
                    <div><h4>{apiData.todayDeaths[3]} </h4></div>

                </div>
            )}
        </>
    );
};

export default InfoTracker;
