import axios from 'axios';

const roots = () => {
  return axios.get(`https://disease.sh/v3/covid-19/countries`)
    .then((response) => {
      const userRepo = response.data[0].country;
      console.log(userRepo)
      return userRepo;
    })
    .catch(() => {
      return `<h2>Error</h2>`;
    });
}

export default roots;
