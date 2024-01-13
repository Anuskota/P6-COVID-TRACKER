import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

const Marks = ({ data }) => {
  if (!data) {
    // Se data for null ou undefined, retorna null ou algo adequado ao seu caso
    return null;
  }

  return (
    <g className="marks">
      {data.features.map((feature, index) => (
        <path key={index} d={path(feature)} />
      ))}
    </g>
  );
};

export default Marks;
