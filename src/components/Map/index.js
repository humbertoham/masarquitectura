import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1792.246242947081!2d-98.24302904127806!3d26.0501567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86650e8cc23842b9%3A0x90d8ee6c78b2eed0!2sEj%C3%A9rcito%20Nacional%20500%2C%201ro%20de%20Mayo%2C%2088786%20Reynosa%2C%20Tamps.!5e0!3m2!1sen!2smx!4v1657049684119!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
