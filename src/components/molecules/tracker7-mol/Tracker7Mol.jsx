import FetchData from "../../../services/FetchData";
import CardCountryMap from "../../atoms/tracker7-atom/CardCountryMap";
import CardDataMap from "../../atoms/tracker7-atom/CardDataMap";
import UseData from '../../../hooks/UseData';
import './tracker7Mol.css';

const Tracker7Mol = () => {
  const countryId = "US";
  const { data, error } = FetchData("countries");
  const contentCard = UseData();


  if (error) {
    console.error("Erro ao obter dados:", error);
    return <h1>Erro ao carregar dados</h1>;
  }

  if (!data || !data.length) {
    return <h1>Carregando...</h1>;
  }

  const countryData = data.find(country => country.countryInfo.iso2 === countryId);

  return (
    <>
      <h1>World</h1>
      <div className="map-container">
<div>MAP HERE</div>
      </div>
      <div className="tracker7-container">
        <div className="tracker7-row">
          <CardCountryMap countryData={countryData} />
        </div>
        <div className="tracker7-row">
          <CardDataMap countryData={contentCard[0]} />
        </div>
      </div>
    </>
  );
};

export default Tracker7Mol;
