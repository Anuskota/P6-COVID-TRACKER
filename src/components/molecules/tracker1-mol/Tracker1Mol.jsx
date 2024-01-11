import DropDownButton from "../../atoms/tracker1-atom/dropDownButton";
import Tracker1Atom from "../../atoms/tracker1-atom/CardDataTracker1";
import "./tracker1Mol.css";
import FetchData from "../../../services/FetchData";


const Tracker1Mol = () => {
  const allCountries = FetchData("countries")
  console.log(allCountries.data.country)
  return (
    <>
      <div className="container-tracker1 p-4 ">
        <div className="dropDown-container d-flex justify-content-between">
          <DropDownButton>
          {allCountries.map((item, index) => (
            <Dropdown.Item
              key={index}
            >{item.country}</Dropdown.Item>
          ))}
        </DropDownButton>
          <h6>Updated: June 5, 2022</h6>
        </div>
        <div>
          <Tracker1Atom></Tracker1Atom>
          <div className="map"></div>
        </div>
        <div>Cards Abajo </div>
      </div>
    </>
  );
};

export default Tracker1Mol;
