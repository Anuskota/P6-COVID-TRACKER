
import { useState, useEffect } from 'react';
import roots from '../../atoms/track-0/InfoTracker';
import './infoTracker.css';


const InfoTracker = () => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        roots()
            .then((api) => {
                setApiData(api);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    return (
        <>
            {error ? (
                <h1>Error: {error.message}</h1>
            ) : (
                apiData && 
                <div className='infoTracker-card'>
                    <div><h3>{apiData[0].country}</h3></div>
                    <div><h4>{apiData[0].country} </h4></div>
                    <div><h4>{apiData[0].cases} </h4></div>

                </div>
            )}
        </>
    );
};

export default InfoTracker;
