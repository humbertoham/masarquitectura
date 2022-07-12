import React, { useEffect } from "react";
import { Container, Wrapper, Text, Message, LogoN } from "./Section.styles";
import image from "../../images/banner.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text>
          <h1>Nuestros servicios</h1>

          <div className="dividerw"></div>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Section;
