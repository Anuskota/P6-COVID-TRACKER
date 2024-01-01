<<<<<<< HEAD
import  { useState, useEffect } from 'react';
=======
>>>>>>> 84ee14f9ce6238a8ae456ae3c91af77a7a555e0c
import './App.css';
import Router from './configuration/Router.jsx';


function App() {
<<<<<<< HEAD
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

=======
>>>>>>> 84ee14f9ce6238a8ae456ae3c91af77a7a555e0c
  return (
    <>
      <Router/>
   </>
  );
}

export default App;
