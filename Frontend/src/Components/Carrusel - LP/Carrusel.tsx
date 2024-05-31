import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrusel.css';
import Bank from "./Imgs/Bank.png";
import Hands from "./Imgs/Hands.png";
import Reunion from "./Imgs/together.png";
import Logo from "../../Imagenes/Mi campus/LogoS.png"

const Carousel: React.FC = () => {
    const settings = {
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll:1,
        arrows: false,
        infinite: true,
        centerPadding:'20px',
        autoplay:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src={Bank} alt="Niños concentrados" />
                    <div className="info-box" >
                        <h1>HORARIOS</h1>
                        <h3>
                            Podrás visualizar los horarios de cada alumno.
                            Además, podrás gestionar los horarios de clases y actividades extracurriculares, facilitando la organización y la comunicación .
                        </h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Hands} alt="Asistencia" />
                    <div className="info-box">
                        <h1>ASISTENCIAS</h1>
                        <h3>
                            Podrás observar un registro detallado de las asistencias de cada alumno. 
                            Conocer rápidamente su estado , y mantener informados a los padres sobre su asistencia.
                        </h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Reunion} alt="Notas" />
                    <div className="info-box">
                        <h1>CALIFICACIONES</h1>
                        <h3>
                            Consulta las calificaciones de forma rápida y sencilla. 
                            Con esta herramienta, podrás hacer un seguimiento detallado del progreso académico de cada estudiante.
                        </h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img  src={Logo} alt="Logo App"  style={{background:"white"}}/>
                    <div className="info-box">
                        <h1>MI CAMPUS</h1>
                        <h3>
                            Descubre más sobre nuestra aplicación y cómo puede facilitar tu trabajo. 
                            Podrás gestionar de forma eficiente las tareas administrativas de tu institución.
                        </h3>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
