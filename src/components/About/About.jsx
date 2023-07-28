import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import aboutHero from "../../images/about-hero.svg";
import Footer from "../Footer/Footer";
import Brand from "../Brand/Brand";

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

      <Brand />
      <Footer />
    </>
  );
}

export default About;
