import  { useState, useEffect } from 'react';
import './App.css';
import roots from './services/roots.js';

function App() {
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
        apiData && <img src={apiData}/>
      )}
    </>
  );
}

export default App;
