import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container" style={{ height: "90vh" }}>
        <div className="row w-100">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              FComuter
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                Not have any addresses yet!!
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a
                  className="text-decoration-none"
                  href="mailto:dugle1605@gmail.com"
                >
                  dugle1605@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Products
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <a className="text-decoration-none" href="#">
                  Luxury
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Sport Wear
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Popular Dress
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Gym Accessories
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Sport Shoes
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Further Info
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none">Shop Locations</Link>
              </li>
              <li>
                <Link className="text-decoration-none">FAQs</Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row w-100 text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="http://facebook.com/"
                >
                  <i className="fa fa-facebook-f fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <i className="fa fa-instagram fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://twitter.com/"
                >
                  <i className="fa fa-twitter fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  <i className="fa fa-linkedin fa-lg fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="subscribeEmail">
              Email address
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control bg-dark border-light"
                id="subscribeEmail"
                placeholder="Email address"
              />
              <div className="input-group-text btn-success text-light">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-100 bg-black py-3" style={{ height: "20vh" }}>
        <div className="row pt-2">
          <div className="col-12">
            <p className="text-left text-light">
              Copyright &copy; 2023 Company Name | Designed by{" "}
              <a
                rel="sponsored"
                href="https://www.linkedin.com/in/dung-le-b988191b6/"
                target="_blank"
              >
                Michael D-Killer
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
