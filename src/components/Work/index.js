import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  Message,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCompassDrafting,
  faHelmetSafety,
  faTruckLoading,
  faMagnifyingGlass,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="servicios">
      <Content>
        <h1>Servicios</h1>
        <div className="divider"></div>
        <p>Ofrecemos una solución integral para todos tus proyectos.</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faCompassDrafting} />

            <CardHeading>Diseño arquitectónico</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faHelmetSafety} />

            <CardHeading>Supervisión de obra</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckLoading} />
            <CardHeading>Construcción</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faMagnifyingGlass} />
            <CardHeading>Análisis de costos</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faDiagramProject} />
            <CardHeading>Proyecto ejecutivo</CardHeading>
          </CardHeader>
        </CardWrapper>
      </div>
      <Message href="/proyectos">Nuestros Proyectos</Message>
    </Wrapper>
  );
};

export default Work;
