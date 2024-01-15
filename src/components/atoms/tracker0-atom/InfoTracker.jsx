/* eslint-disable react/jsx-key */
import FetchData from "../../../services/FetchData";
import "./infoTracker.css";

const InfoTracker = () => {
  const apiEndpoint = "all";
  const { data, error } = FetchData(apiEndpoint);

  return (
    <>
      {error ? (
        <h1>Error: {error.message}</h1>
      ) : (
        data && [
          // eslint-disable-next-line react/jsx-key
          <div className="infoTracker-card total-case-card">
            <div className="title-container">
              <h5>Total Case</h5>
            </div>
            <div className="cases-container">
              <p className="today-cases-container">+{data.todayCases} </p>
              <div className="total-cases-container">
                <h6>{data.cases}</h6>
              </div>
            </div>
          </div>,
          <div className="infoTracker-card active-case-card">
            <div className="title-container">
              <h5>Active Case</h5>
            </div>
            <div className="cases-container">
              <div className="total-cases-container">
                <h6>{data.active}</h6>
              </div>
            </div>
          </div>,
          <div className="infoTracker-card recovered-case-card">
            <div className="title-container">
              <h5>Recovered Case</h5>
            </div>
            <div className="cases-container">
              <p className="today-cases-container">+{data.todayRecovered} </p>
              <div className="total-cases-container">
                <h6>{data.recovered}</h6>
              </div>
            </div>
          </div>,
          <div className="infoTracker-card deaths-case-card">
            <div className="title-container">
              <h5>Deaths Case</h5>
            </div>
            <div className="cases-container">
              <p className="today-cases-container">+{data.todayDeaths} </p>
              <div className="total-cases-container">
                <h6>{data.deaths}</h6>
              </div>
            </div>
          </div>
        ]
      )}
    </>
  );
};

export default InfoTracker;
