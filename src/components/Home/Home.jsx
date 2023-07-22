import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Banner from "./Banner";
import MonthCategories from "./MonthCategories";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "../Footer/Footer";

Home.propTypes = {};

function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <Banner />

      <MonthCategories />
      <Footer />
    </>
  );
}

export default Home;
