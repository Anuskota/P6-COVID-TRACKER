import axios from 'axios';
import { useState, useEffect } from "react";

const FetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = `https://disease.sh/v3/covid-19/${endpoint}`;

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [apiUrl]);


  return { data, error };
}

export default FetchData;
