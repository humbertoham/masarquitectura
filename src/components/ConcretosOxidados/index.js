import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Message,
} from "./ConcretosOxidados.styles";

import image from "../../images/ConcretoOxidado/image.jpg";
import image2 from "../../images/ConcretoOxidado/image2.jpg";
import image3 from "../../images/ConcretoOxidado/image3.jpg";
import image4 from "../../images/ConcretoOxidado/image4.jpg";
import image5 from "../../images/ConcretoOxidado/image5.jpg";
import image6 from "../../images/ConcretoOxidado/image6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ConcretosOxidados = () => {
  return (
    <>
      <Wrapper id="concretosoxidados">
        <Content>
          <h1>Concretos Oxidados</h1>
        </Content>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image2} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image3} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image4} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image5} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image6} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
};
export default ConcretosOxidados;
