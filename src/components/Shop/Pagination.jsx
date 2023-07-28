import React from "react";

function Pagination() {
  return (
    <div div="row">
      <ul className="pagination pagination-lg justify-content-end">
        <li className="page-item disabled">
          <a
            className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
            href="#"
            tabindex="-1"
          >
            1
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
            href="#"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
            href="#"
          >
            3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
