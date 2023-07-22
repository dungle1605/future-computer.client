import React, { useEffect, useState } from "react";
import axios from "axios";

function MonthCategories() {
  const [monthCate, SetMonthCate] = useState([]);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_ENDPOINT}/api/categories/categories-of-the-month`)
      .then((res) => {
        SetMonthCate(res.data);
      });
  }, []);

  return (
    <section className="container py-5" style={{ height: "120vh" }}>
      <div className="row text-center pt-3">
        <div className="col-md-6 col-lg-12 m-auto">
          <h1 className="h1">Categories of The Month</h1>
          <p>The categories that have recorded the most selling per month</p>
        </div>
      </div>
      <div className="row">
        {monthCate.length < 1 && (
          <div className="container-fluid">Please wait....</div>
        )}
        {monthCate.length > 0 &&
          monthCate.map((val, index) => {
            return (
              <div key={index} className="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img
                    src={`${REACT_APP_API_ENDPOINT}\\${val.path.replace(
                      /\/\//g,
                      "/"
                    )}`}
                    className="rounded-circle img-fluid border"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">{val.name}</h2>
                <p className="text-center">
                  <a className="btn btn-success">Go Shop</a>
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default MonthCategories;
