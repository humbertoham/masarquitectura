import React from "react";
import Civil from "./Civil";
import Comercial from "./Comercial";
import ConcretosEstampados from "./ConcretosEstampados";
import ConcretosOxidados from "./ConcretosOxidados";
import Diseno from "./Diseno";
import Industrial from "./Industrial";
import Microcementos from "./Microcementos";
import PHeader from "./PHeader";
import Clients from "./Clients";
import Prov from "./Prov";
import Project from "./Project";

const Proyectos = () => {
  return (
    <>
      <PHeader />
      <Project />
      <Diseno />
      <Comercial />
      <Industrial />
      <Civil />

      <ConcretosEstampados />
      <ConcretosOxidados />

      <Microcementos />
      <Clients />
      <Prov />
    </>
  );
};

export default Proyectos;
