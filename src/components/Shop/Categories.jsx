import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const { REACT_APP_API_ENDPOINT } = process.env;
  const [categories, setCategories] = useState([]);
  const [chosen, setChosen] = useState("");

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_ENDPOINT}/api/Categories/get-all-categories`)
      .then((res) => {
        setCategories(res.data);
        setChosen(res.data[0]["name"]);
      });
  }, []);
  return (
    <div className="col-lg-3">
      <h1 className="h2 pb-4">Categories</h1>
      <ul className="list-unstyled templatemo-accordion">
        {categories.length <= 0 && <div>Please wait...</div>}
        {categories.length > 0 &&
          categories.map((val, index) => {
            return (
              <li key={index} className="pb-3">
                <Link className="collapsed d-flex justify-content-between h3 text-decoration-none">
                  {val.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Categories;
