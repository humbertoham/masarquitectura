import React from "react";
import About from "./About";

import Banner from "./Banner";
import Clients from "./Clients";
import Prov from "./Prov";

import Section from "./Section";
import Work from "./Work";
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Section />
      <Work />
      <Clients />
      <Prov />
    </>
  );
};

export default Home;
