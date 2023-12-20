import { useState, useEffect } from 'react';
import roots from './services/roots';

const Hooks = () => {
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
        apiData && <img src={apiData} alt="API Image" />
      )}
    </>
  );
};

export default Hooks;
