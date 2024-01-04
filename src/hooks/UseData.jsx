// UseData.jsx
import { useState, useEffect } from "react";
import FetchData from "../services/FetchData";

const UseData = () => {
  const [contentCard, setContentCards] = useState({});
  const { data } = FetchData("countries");

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.length > 0) {
        const defaultCountry = data.find((item) => item.countryInfo.iso2 === "US");
        setContentCards(defaultCountry);
      }
    };

    fetchData();
  }, [data]);

  const handleClick = (countryId) => {
    console.log('Handle Click function called with Country ID:', countryId);
  
    if (data) {
      const defaultCountry = data.find((item) => item.countryInfo.iso2 === "US");

      if (countryId === "US") {
        setContentCards(defaultCountry);
      } else {
        const newContent = data.find((item) => item.countryInfo.iso2 === countryId);
        console.log('New Content:', newContent);
  
        if (newContent) {
          setContentCards(newContent);
        }
      }
    }
  };

  return [contentCard, handleClick];
};

export default UseData;
