import FetchData from "../services/FetchData";
import { useState } from "react";

//Definindo Estados
//Definir estado inicial
const apiEndpoint = "countries";
const { data } = FetchData(apiEndpoint);

function UseData (initialState) {

const dataDefault = () => {
    return (
          <>
            <div className="cardData cardCases">
              <h5>Total Cases</h5>
              <h3>{data._id[840].cases}</h3>
            </div>
  
            <div className="cardData cardDeaths">
              <h5>Total Deaths </h5>
              <h3>{data._id[840].deaths}</h3>
            </div>
  
            <div className="cardData cardRecovered">
              <h5>Total Recovered</h5>
              <h3>{data._id[840].recovered}</h3>
            </div>
  
            <div className="cardData cardActive">
              <h5>Total Active</h5>
              <h3>{data._id[840].active}</h3>
            </div>
  
            <div className="cardData cardNewCases">
              <h5>New Cases</h5>
              <h3>{data._id[840].todayCases}</h3>
            </div>
  
            <div className="cardData cardNewDeaths">
              <h5>New Deaths</h5>
              <h3>{data._id[840].todayDeaths}</h3>
            </div>
          </>
        )}


//Definir estado contrário
const dataSelected = ({ countryData }) => {
    return (
      <>
        {countryData ? (
          <>
            <div className="cardData cardCases">
              <h5>Total Cases</h5>
              <h3>{countryData.cases}</h3>
            </div>
  
            <div className="cardData cardDeaths">
              <h5>Total Deaths </h5>
              <h3>{countryData.deaths}</h3>
            </div>
  
            <div className="cardData cardRecovered">
              <h5>Total Recovered</h5>
              <h3>{countryData.recovered}</h3>
            </div>
  
            <div className="cardData cardActive">
              <h5>Total Active</h5>
              <h3>{countryData.active}</h3>
            </div>
  
            <div className="cardData cardNewCases">
              <h5>New Cases</h5>
              <h3>{countryData.todayCases}</h3>
            </div>
  
            <div className="cardData cardNewDeaths">
              <h5>New Deaths</h5>
              <h3>{countryData.todayDeaths}</h3>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    );
  };

// const dataSelected = () => {
//     return (
//           <>
//             <div className="tracker4-row">
//     {data ? (
//           countryIds.map((countryId, index) => (
//             <>
//             <CardData key={index} countryData={data.find(item => item.countryInfo.iso2 === countryId)}/>
//             </>
//           ))
//         ) : (
//           <h1>Loading...</h1>
//         )}
//     </div>
//           </>
//         )}


//Hook de UseState
//A primeira variável é a que armazena o valor do estado em que está o botao
//A segunda variável é a que muda . Deve ter algo que dispara o setButtonChange
const[buttonChange, setButtonChange] = useState(initialState);
//ao clicar na funcao, se o botao que estou clicando é igual a like, então muda o estado do botao a não gosto
const handleClick = () => {
// (buttonChange == like) ? setButtonChange(dislike) : setButtonChange(like);
setButtonChange((prevState) =>  (prevState == dataDefault ? dataSelected : dataDefault));
} 
return [buttonChange, handleClick];
}

export default UseData;