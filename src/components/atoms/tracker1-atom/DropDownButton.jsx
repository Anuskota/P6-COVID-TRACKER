import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import "./dropDownButton.css";

const DropDownButton = ({ items }) => {
  return (
    <>
      <Dropdown className="country-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map((item, index) => (
            <Dropdown.Item key={index}>{item}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

DropDownButton.propTypes = {
  items: PropTypes.array,
};

export default DropDownButton;