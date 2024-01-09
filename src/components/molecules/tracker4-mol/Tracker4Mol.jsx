import FetchData from "../../../services/FetchData";
import CardCountry from "../../atoms/tracker4-atom/CardCountry";
import CardData from "../../atoms/tracker4-atom/CardData";
import UseData from '../../../hooks/UseData';
import './tracker4Mol.css';
import { useState } from "react";

const Tracker4Mol = () => {
  const countryIds = ["US", "ES", "IT", "IN", "GB", "FR", "DE", "RU", "TR"];
  const { data } = FetchData("countries");
  const [contentCard, handleClick] = UseData();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    const selectedCountryId = countryIds[index];
    handleClick(selectedCountryId);
  };

  if (!data || data.length === 0 || !contentCard) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      
      <div className="tracker4-container">
      <h1>Covid-19 Country Wise - Tabs</h1>
        <div className="tracker4-row">
          {countryIds.map((countryId, index) => (
            <CardCountry
              key={index}
              countryData={data.find((item) => item.countryInfo.iso2 === countryId)}
              onClick={() => handleButtonClick(index)}
              className={`${activeIndex === index ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="tracker4-row">
          <CardData countryData={contentCard} />
        </div>
      </div>
    </>
  );
};

export default Tracker4Mol;
