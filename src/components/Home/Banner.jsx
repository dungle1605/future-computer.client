import React from "react";
import imgBanner1 from "../../images/bannerImage1.png";
import imgBanner2 from "../../images/bannerImage2.png";
import imgBanner3 from "../../images/bannerImage3.png";

function Banner() {
  return (
    <div
      id="template-mo-zay-hero-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src={imgBanner1} alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 main-text-success">
                    <b>FCom</b> eCommerce
                  </h1>
                  <h3 className="h2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatibus officia ab neque sequi aliquam? Sint veritatis
                    earum veniam alias provident!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src={imgBanner2} alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1">Proident occaecat</h1>
                  <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, modi magnam. Nam repudiandae inventore harum
                    exercitationem quisquam, fugiat expedita, error soluta
                    facilis impedit repellendus ipsam placeat, amet optio!
                    Exercitationem, adipisci?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src={imgBanner3} alt="" />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1">Repr in voluptate</h1>
                  <h3 className="h2">Ullamco laboris nisi ut </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed ullam repudiandae aliquid quas, ex cumque neque?
                    Voluptatem commodi, nemo dolore quisquam fugit rerum, qui
                    modi fuga facere ut molestiae non!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i className="fa fa-chevron-left"></i>
      </a>
      <a
        className="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i className="fa fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default Banner;
