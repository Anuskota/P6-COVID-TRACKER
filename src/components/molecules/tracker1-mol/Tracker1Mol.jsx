import DropDownButton from "../../atoms/tracker1-atom/DropDownButton";
import Tracker1Atom from "../../atoms/tracker1-atom/CardDataTracker1";
import CardDataGlobal from "../../atoms/tracker1-atom/CardDataGlobal";
import "./tracker1Mol.css";
import FetchData from "../../../services/FetchData";
import { useState, useEffect } from "react";
import Map from "../../atoms/tracker1-atom/Map";
import Marks from "../../atoms/tracker1-atom/Marks";

const Tracker1Mol = () => {
  const width = 960;
  const heigth = 500;
  const map = Map();

  const { data: allCountries } = FetchData("countries");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (allCountries && allCountries.length > 0) {
      setSelectedCountry(allCountries[0]);
    }
  }, [allCountries]);

  const handleCountrySelect = (country) => {
    const selectedCountryData = allCountries.find((c) => c.country === country);
    setSelectedCountry(selectedCountryData)
    
  }
  
  return (
    <>
      <div className="container-tracker1 p-4">
        <div className="dropDown-container d-flex justify-content-between">
          <DropDownButton
            items={
              allCountries ? allCountries.map((country) => country.country) : []
            }
            onSelect={handleCountrySelect}
            selectedCountry={selectedCountry}
          />
          <h6>Updated: June 5, 2022</h6>
        </div>
        <div>
          <Tracker1Atom countryData={selectedCountry} />
          <div className="map">
            <svg width={width} height={heigth}>
              <Marks data={map} />
            </svg>
          </div>
        </div>
        <div className="tracker1-row">
          <CardDataGlobal />
        </div>
      </div>
    </>
  );
};

export default Tracker1Mol;
