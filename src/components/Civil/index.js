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
} from "./Civil.styles";

import IonPhotoViewer from "@codesyntax/ionic-react-photo-viewer";

import image from "../../images/Civil/image.JPG";
import image2 from "../../images/Civil/image1.JPG";
import image3 from "../../images/Civil/image2.JPG";
import image4 from "../../images/Civil/image3.jpg";
import image5 from "../../images/Civil/image4.JPG";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Civil = () => {
  return (
    <>
      <Wrapper id="civil">
        <Content>
          <h1>Civil</h1>
          <div className="divider"></div>
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
                <IonPhotoViewer src={image}>
                  <Page src={image} />
                </IonPhotoViewer>
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <IonPhotoViewer src={image2}>
                  <Page src={image2} />
                </IonPhotoViewer>
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <IonPhotoViewer src={image3}>
                  <Page src={image3} />
                </IonPhotoViewer>
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <IonPhotoViewer src={image4}>
                  <Page src={image4} />
                </IonPhotoViewer>
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <IonPhotoViewer src={image5}>
                  <Page src={image5} />
                </IonPhotoViewer>
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
};
export default Civil;
