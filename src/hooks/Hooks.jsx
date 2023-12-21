import { useState, useEffect } from 'react';
import fetchData from '../services/fetchData';

const Hooks = () => {
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
        apiData && <h1 src={apiData} alt="API Image" />
      )}
    </>
  );
};

export default Hooks;
