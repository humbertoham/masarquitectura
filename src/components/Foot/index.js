import React from "react";
import { Content, Wrapper, Red } from "./Foot.styles";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Foot = () => (
  <Wrapper>
    <Content>
      <Red href="https://www.facebook.com/masarcuitectura3d">
        <FontAwesomeIcon icon={faFacebookF} />
      </Red>
      <p>© Copyright 2022 Más Arquitectura</p>
    </Content>
  </Wrapper>
);

export default Foot;
