import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <section class="ftco-section" id="contacto">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Contáctanos</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="wrapper">
              <div class="row justify-content-center">
                <div class="col-lg-8 mb-5">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="dbox w-100 text-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text">
                          <p>
                            <span>Dirección:</span>
                            <a href="https://goo.gl/maps/BR4xNqvGF2QRgWQA7">
                              Ejercito Nacional 500, Anzalduas, 88630 Reynosa,
                              Tamps.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="dbox w-100 text-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-phone"></span>
                        </div>
                        <div class="text">
                          <p>
                            <span>Teléfono:</span>{" "}
                            <a href="tel://8991019252">+52 899 101 9252</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="dbox w-100 text-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-paper-plane"></span>
                        </div>
                        <div class="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:masarquitectura3d@gmail.com">
                              masarquitectura3d@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="contact-wrap">
                    <h3 class="mb-4 text-center">
                      Ponte en contácto con nosotros!
                    </h3>
                    <div
                      id="form-message-warning"
                      class="mb-4 w-100 text-center"
                    ></div>
                    <div
                      id="form-message-success"
                      class="mb-4 w-100 text-center"
                    >
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      class="contactForm"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Nombre"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Asunto"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="8"
                              placeholder="Mensaje"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="
                              Enviar Mensaje"
                              class="btn btn-primary"
                            />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
