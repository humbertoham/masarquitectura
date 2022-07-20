import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.00281472185222!2d-98.31707223858625!3d26.064784546055073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505f3ab60c38f%3A0xedf7fe3ef59d9e80!2sC.%2015%2088-123%2C%20Aztl%C3%A1n%2C%2088740%20Reynosa%2C%20Tamps.!5e0!3m2!1sen!2smx!4v1658281006849!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
