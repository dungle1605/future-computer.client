import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Categories from "./Categories";
import ShopList from "./ShopList";
import Pagination from "./Pagination";
import Brand from "../Brand/Brand";

function Shop() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container py-5" style={{ height: "140vh" }}>
        <div className="row">
          <Categories />
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">Category Name</li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <ShopList />
            <Pagination />
          </div>
        </div>
      </div>
      <Brand />
      <Footer />
    </>
  );
}

export default Shop;
