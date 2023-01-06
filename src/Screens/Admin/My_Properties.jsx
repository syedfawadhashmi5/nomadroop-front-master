import React from "react";
import ProertyCrd from "../../Components/ProertyCrd";

function My_Properties() {
  return (
    <div className="main_properties">
      <div className="search_bar">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-10">
              <div className="search d-flex justify-content-center align-items-center">
                <i className="fa fa-search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by property name"
                />
              </div>
            </div>
            <div className="col-md-2">
            <button className="btn btn-primary">Search</button>
            </div>
          </div>
          <div className="bottom_line"></div>
        </div>
      </div>
      <div>
        <ProertyCrd />
      </div>
    </div>
  );
}

export default My_Properties;
