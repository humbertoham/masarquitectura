import React from "react";
import { useEffect } from "react";
import { Container, Wrapper, Text } from "./Banner.styles";
import image from "../../images/banner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text data-aos="fade-up">
          Más Arquitectura
          <p>Arquitectura, Diseño, Obra Civil y Construcción </p>
          <section id="section05" class="demo">
            <a href="#about">
              <span></span>
            </a>
          </section>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Banner;
