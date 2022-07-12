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
} from "./ConcretosEstampados.styles";

import image from "../../images/ConcretoEstampado/image.jpg";
import image2 from "../../images/ConcretoEstampado/image2.jpg";
import image3 from "../../images/ConcretoEstampado/image3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ConcretosEstampados = () => {
  return (
    <>
      <Wrapper id="concretosestampados">
        <Content>
          <h1>Concretos Estampados</h1>
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
        </Swiper>
      </Wrapper>
    </>
  );
};
export default ConcretosEstampados;
