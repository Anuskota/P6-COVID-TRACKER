import axios from 'axios';

const fetchData = (endpoint) => {
  const apiUrl = `https://disease.sh/v3/covid-19/${endpoint}`;

  return axios.get(apiUrl)
    .then((response) => {
      const data = response.data;
      console.log(data);
      return data;
    })
    .catch(() => {
      return `<h2>Error</h2>`;
    });
}

export default fetchData;