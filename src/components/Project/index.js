import React, { useEffect } from "react";
import { Content, Wrapper } from "./Project.styles";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Proyectos</h1>
        <div className="divider"></div>
        <p>Aquí nuestros más recientes proyectos.</p>
      </Content>
    </Wrapper>
  );
};

export default Project;
