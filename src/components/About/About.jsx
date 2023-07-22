import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import aboutHero from "../../images/about-hero.svg";
import hpBrand from "../../images/HP_brand.png";
import dellBrand from "../../images/dell_brand.png";
import asusBrand from "../../images/asus_brand.png";
import alienwareBrand from "../../images/alienware_brand.png";
import akkoBrand from "../../images/Akko_brand.png";
import razerBrand from "../../images/razer_brand.png";
import nvidiaBrand from "../../images/nvidia_brand2.png";
import msiBrand from "../../images/msi_brand.png";
import Footer from "../Footer/Footer";

About.propTypes = {};

function About() {
  return (
    <>
      <Navbar />
      <Header />
      <section class="main-bg-success py-5">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                This is the Ecommerce site that user can order the equipment
                regard to technology. On this site, user can order the goods,
                online purchase and by the distance of destination, the system
                will add some extra fee for shipment. User can also view their
                history as well as cancel the order anytime.
              </p>
            </div>
            <div class="col-md-4">
              <img src={aboutHero} alt="About Hero" />
            </div>
          </div>
        </div>
      </section>
      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-8 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="row w-100">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 main-text-success text-center">
                <i class="fa fa-truck fa-lg"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 main-text-success text-center">
                <i class="fa fa-exchange"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 main-text-success text-center">
                <i class="fa fa-percent"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 main-text-success text-center">
                <i class="fa fa-user"></i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
              <div class="row d-flex flex-row">
                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <i class="text-gray fa fa-chevron-left"></i>
                  </a>
                </div>

                <div class="col">
                  <div
                    class="carousel slide carousel-multi-item pt-2 pt-md-0"
                    id="templatemo-slide-brand"
                    data-bs-ride="carousel"
                  >
                    <div
                      class="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={hpBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={dellBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={asusBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={alienwareBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={akkoBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={razerBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={nvidiaBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={msiBrand}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="next"
                  >
                    <i class="text-gray fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
