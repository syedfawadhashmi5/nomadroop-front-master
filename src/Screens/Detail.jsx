import React from "react";

function Detail() {
  return (
    <div className="Invoice_section">
      <h2 className="mt-0">Invoices</h2>
      <div className="filter_invoice container mt-4 p-2.5">
        <h2 className="my-4">Apply Filter here</h2>
        <div className="bottom_line"></div>
        <div className="filter_btn mt-3.5 text-center">
          <div className="row">
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  From date
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  To Date
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reservation fee
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Any
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="table_box">
            <div className="row">
              <div className="col-md-6">
                <h2>
                  Reservation fees filter applies only to the invoices issued by
                  you!
                </h2>
              </div>
              <div className="col-md-6 ">
                <h2 className="mb-0 text-end">
                  Total Invoices Confirmed - <span>USD 19447.2</span>
                </h2>
                <h2 className="mt-1 text-end">
                  Total Invoices Issued - <span>USD 3982.4</span>
                </h2>
              </div>
              <div className="bottom_line"></div>
              <div className="table_user">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Invoice No.</th>
                      <th scope="col">Date</th>
                      <th scope="col">Invoice Type</th>
                      <th scope="col">Billing Type</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      Invoice No <br /> <span>27383</span> {/*  <br /> <ArrowDropUpIcon /> */}
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Issued</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Confirmed</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Deposit Paid</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Issued</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Confirmed</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Deposit Paid</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Issued</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Confirmed</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Deposit Paid</td>
                    </tr>
                    <tr>
                      <td>
                        Invoice No <br /> <span>27383</span>
                      </td>
                      <td>
                        Monday <br /> September 26th, 2022
                      </td>
                      <td>
                        Reservation <br /> Fee
                      </td>
                      <td>One Time</td>
                      <td>
                        <span>USD 393.6</span>
                      </td>
                      <td>Issued</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
