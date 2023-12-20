import { useState, useEffect } from 'react';
import './App.css';
import roots from './services/roots.js';
import Navbar from './components/molecules/Navbar.jsx';
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
  }, []); // O array vazio indica que o efeito deve ser executado apenas uma vez, sem dependências

  return (
    <>
      {error ? (
        <h1>Error: {error.message}</h1>
      ) : (
          apiData && <img src={apiData} />
      )}
      <Navbar></Navbar>
    </>
  );
}

export default App;
