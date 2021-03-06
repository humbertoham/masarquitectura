import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="acerca">
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>
            Empresa especializada en proyectos de construcción, edificaciones,
            obras de urbanismo y prestación de servicios en las ramas de la
            ingeniería y/o arquitectura.
          </p>
        </Text>
      </Content>

      <Content data-aos="fade-right">
        <Text>
          <h1>Misión</h1>
          <p>
            En Mas Arquitectura nos hemos comprometido a proporcionar soluciones
            integrales en la construcción de, residencial, comercial y obras
            civiles, ajustadas siempre a las más avanzadas tecnologías y normas
            de calidad, que permitan satisfacer ampliamente las necesidades y
            expectativas de nuestros clientes a un precio justo y excelente
            servicio.
          </p>
        </Text>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Visión </h1>
          <p>
            Posicionarnos como una empresa constructora líder en el desarrollo
            de proyectos de reconocimiento regional y nacional,
            caracterizándonos por nuestro “sello constructivo” de gran calidad y
            por la confianza y garantía que otorgamos a nuestros clientes.
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default About;
