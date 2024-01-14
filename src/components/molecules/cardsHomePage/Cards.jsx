import "./cards.css";
import fever from "../../../assets/img/fever.svg"
import breathing from "../../../assets/img/breathing.svg"
import lungs from "../../../assets/img/pulmones.png"
import cough from "../../../assets/img/covid.svg"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'; // Importa el hook useState si aún no está importado
import { Container } from "react-bootstrap";

const Cards = () => {
    const [index, setIndex] = useState(0);

    


    return (
      <>
        <div className="container-carrusel">
          <div className="titles">
            <h5>Symptom</h5>
            <h1>Basic Symptom Against <br></br>Corona virus</h1>
          </div>

          <Carousel
            data-bs-theme="dark"
            className="carousel row"
            controls={false}
            indicators={false}
            // onSelect={handleSelect}
            interval={3000}
            wrap={true}
          >
            <Carousel.Item className="carousel-item">
              <img className="d-block " src={fever} alt="First slide" />

              <h5>Fever</h5>
              <p>
                Fever you feel hot to touch on your chest or back you do not
                need to measure your temperature. It is also may appear in 2-10
                days.
              </p>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
              <img className="d-block " src={cough} alt="First slide" />

              <h5>Caught</h5>
              <p>
                Continuous coughing a lot for more than an hour, or 3 or more
                coughing episodes in 24 hours. If you usually have a cough it
                may be worse than usual.
              </p>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block " src={lungs} alt="First slide" />

              <h5>Confusion</h5>
              <p>
                Around 1 out of every 6 people who gets COVID-19 becomes
                seriously ill and develops difficulty breathing or shortness of
                breath a lot.
              </p>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block " src={fever} alt="First slide" />

              <h5>Aches and Pains</h5>
              <p>
                Fever is a key symptom, experts say. Do not fixate on a number,
                but know it is really not a fever until your temperature reaches
                at least 100.
              </p>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block " src={breathing} alt="First slide" />

              <h5>Runny Nose </h5>
              <p>
                People of all ages who experience fever and/or cough associated
                with difficulty breadring/shortness of breath.
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
}

export default Cards









