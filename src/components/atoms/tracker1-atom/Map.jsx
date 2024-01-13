import { useState, useEffect } from "react";
import { json } from "d3";
import { feature } from "topojson-client";

const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const Map = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topojsonData) => {
      const { countries } = topojsonData.objects;
      setMapData(feature(topojsonData, countries));
    });
  }, []);

  return mapData;
};

export default Map;
