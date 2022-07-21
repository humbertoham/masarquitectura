import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.22713434816467!2d-98.3154016805132!3d26.06425705554803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3ac6ed8d214a1b4!2zMjbCsDAzJzUxLjIiTiA5OMKwMTgnNTUuMSJX!5e0!3m2!1sen!2smx!4v1658436594839!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
