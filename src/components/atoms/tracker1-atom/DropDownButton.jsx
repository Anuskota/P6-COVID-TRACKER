import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import "./dropDownButton.css";


const DropDownButton = ({ items, onSelect,selectedCountry }) => {
    const handleClick = (country) => {
        console.log("Handle Click: ", country);
        onSelect(country);
    }
    return (
        <>
            <Dropdown className="country-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedCountry ? selectedCountry.country : "Afghanistan"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownMenu">
                {items.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => handleClick(item)}>
                    {item}
                </Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>
            
        </>
    );
};

DropDownButton.propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func,
    selectedCountry:PropTypes.object,
};


export default DropDownButton;