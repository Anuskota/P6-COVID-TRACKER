
import Dropdown from "react-bootstrap/Dropdown";
import "./dropDownButton.css"

const DropDownButton = ({item}) => {
  return (
    <>
        <Dropdown className="country-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {item}
            </Dropdown.Menu>
        </Dropdown>
    </>
  );
};

export default DropDownButton;
