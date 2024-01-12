import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import "./dropDownButton.css";
import Select from "react-select";

const DropDownButton = ({ items, onSelect }) => {
    
    const handleClick = (country) => {
        onSelect(country)
    }
    return (
        <>
        <Dropdown className="country-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Afghanistan
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {items.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handleClick(item)}>{item}</Dropdown.Item>
            ))}
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
};

DropDownButton.propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func
};


export default DropDownButton;