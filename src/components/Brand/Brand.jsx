import React from "react";
import hpBrand from "../../images/HP_brand.png";
import dellBrand from "../../images/dell_brand.png";
import asusBrand from "../../images/asus_brand.png";
import alienwareBrand from "../../images/alienware_brand.png";
import akkoBrand from "../../images/Akko_brand.png";
import razerBrand from "../../images/razer_brand.png";
import nvidiaBrand from "../../images/nvidia_brand2.png";
import msiBrand from "../../images/msi_brand.png";

function Brand() {
  return (
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
                  <div class="carousel-inner product-links-wap" role="listbox">
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
  );
}

export default Brand;
