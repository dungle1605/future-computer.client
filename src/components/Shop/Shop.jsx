import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

Shop.propTypes = {};

function Shop(props) {
  return (
    <>
      <Navbar />
      <Header />
      <div>Shop</div>
      <Footer />
    </>
  );
}

export default Shop;
