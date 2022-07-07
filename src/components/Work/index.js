import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Message,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faKitMedical,
  faCalendarCheck,
  faTruckMedical,
  faMaskFace,
  faHospital,
  faTruckPickup,
  faPersonRunning,
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
        <p>Falta información.</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckMedical} />

            <CardHeading>Falta información.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faCalendarCheck} />

            <CardHeading>Falta información.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faHospital} />
            <CardHeading>Falta información.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faPersonRunning} />
            <CardHeading>Falta información. </CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faMaskFace} />
            <CardHeading>Falta información.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckPickup} />
            <CardHeading>Falta información.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faKitMedical} />
            <CardHeading>Falta información.</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información.</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Work;
