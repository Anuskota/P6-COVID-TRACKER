import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

const Marks = ({ mapData }) => {
  if (!mapData) {
    return null;
  }

  return (
    <g className="marks">
      {mapData.features.map((feature, index) => (
        <path key={index} d={path(feature)} />
      ))}
    </g>
  );
};

export default Marks;
