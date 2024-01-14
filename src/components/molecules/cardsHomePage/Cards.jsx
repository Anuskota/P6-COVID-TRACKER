import Slider from "react-slick";
import "./cards.css";
import fever from "../../../assets/img/fever.svg";
import breathing from "../../../assets/img/breathing.svg";
import lungs from "../../../assets/img/pulmones.png";
import cough from "../../../assets/img/covid.svg";
import { Container } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        easing: 'ease-in-out',
    };

    return (
        <Container className="container-carrusel">
        <div className="titles">
            <h5>Symptom</h5>
            <h1>
            Basic Symptom Against <br />
            Corona virus
            </h1>
        </div>

        <Slider {...settings}>
            <div className="carousel-item">
            <img className="d-block" src={fever} alt="Fever" />
            <h5>Fever</h5>
            <p>
                Fever you feel hot to touch on your chest or back (you do not need
                to measure your temperature. It is also may appear in 2-10 days.
            </p>
            </div>

            <div className="carousel-item">
            <img className="d-block" src={cough} alt="Cough" />
            <h5>Cough</h5>
            <p>
                Continuous coughing a lot for more than an hour, or 3 or more
                coughing episodes in 24 hours. If you usually have a cough it may be
                worse than usual.
            </p>
            </div>

            <div className="carousel-item">
            <img className="d-block" src={lungs} alt="Confusion" />
            <h5>Confusion</h5>
            <p>
                Around 1 out of every 6 people who gets COVID-19 becomes seriously
                ill and develops difficulty breathing or shortness of breath a lot.
            </p>
            </div>

            <div className="carousel-item">
            <img className="d-block" src={fever} alt="Aches and Pains" />
            <h5>Aches and Pains</h5>
            <p>
                Fever is a key symptom, experts say. Do not fixate on a number, but
                know it is really not a fever until your temperature reaches at
                least 100.
            </p>
            </div>

            <div className="carousel-item">
            <img className="d-block" src={breathing} alt="Runny Nose" />
            <h5>Runny Nose</h5>
            <p>
                People of all ages who experience fever and/or cough associated with
                difficulty breadring/shortness of breath.
            </p>
            </div>
        </Slider>
        </Container>
    );
};

export default Cards;
