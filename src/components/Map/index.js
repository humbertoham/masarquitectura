import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5502097655512!2d-98.2808900853133!3d26.08095228349287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3da3021058248504!2zMjbCsDA0JzUxLjQiTiA5OMKwMTYnNDMuMyJX!5e0!3m2!1sen!2smx!4v1657655942313!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
