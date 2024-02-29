import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getTicketList, getTicketData } from "../../actions/DashboardActions";
import { useLocation, useNavigate } from "react-router-dom";
import { filter, find, isEmpty } from "lodash";

const ActiveTicket = (props) => {
  const {
    getTicketList,
    ticketList,
    getTicketData,
    ticketData,
    addBreadcrumbs,
    stateValue,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);
  const [accordianId, setAccordianId] = useState();
  const [activeTab, setActiveTab] = useState("activeticket");

  useEffect(() => {
    getTicketList();
    getTicketData();
  }, [getTicketList, getTicketData]);

  const handleClick = (id) => {
    setAccordianId(id);
    if (id === accordianId) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleChange = () => {
    navigate(-1);
    if (pathname === "/dashboard/tickets") {
      addBreadcrumbs("tickets");
    }
  };

  const changeActiveTab = (val) => {
    setActiveTab(val);
  };

  const renderTab = (ticketNo) => {
    let filteredData = [];
    if (!isEmpty(ticketData)) {
      filteredData = find(ticketData, {
        ticket_no: ticketNo,
      });
    }
    return (
      <div className="card speed_sc">
        <div className="card-body tab-body-content">
          <div className=" align-items-start">
            <div className=" align-items-start">
              <div className="col-12">
                <div className="d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold text-center">
                      Ticket #{filteredData.ticket_no}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li
              className="nav-item tab-heading"
              onClick={() => changeActiveTab("activeticket")}
            >
              <a
                className={`nav-link ${
                  activeTab === "activeticket" ? "active" : ""
                }`}
                aria-current="page"
                href="#"
              >
                Active Ticket
              </a>
            </li>
            <li
              className="nav-item tab-heading"
              onClick={() => changeActiveTab("pastticket")}
            >
              <a
                className={`nav-link ${
                  activeTab === "pastticket" ? "active" : ""
                }`}
                href="#"
              >
                All Past Tickets
              </a>
            </li>
          </ul>
          <div className="main-content">
            <div className="tab-content content-1">
              <div
                className={`tab-pane ${
                  activeTab === "activeticket" ? "active" : ""
                }`}
                id="1"
              >
                <ul className="tab-list">
                  <li>
                    Ticket No: &nbsp; <span>{filteredData.ticket_no}</span>
                  </li>
                  <li>
                    Customer Name: &nbsp;{" "}
                    <span>{filteredData.customer_name}</span>
                  </li>
                  <li>
                    Open Date: &nbsp; <span>{filteredData.open_date}</span>
                  </li>
                  <li>
                    Close Date: &nbsp; <span>{filteredData.close_date}</span>
                  </li>
                  <li>
                    City: &nbsp; <span>{filteredData.city}</span>
                  </li>
                  <li>
                    Device No: &nbsp; <span>{filteredData.device_no}</span>
                  </li>
                  <li>
                    Model: &nbsp; <span>{filteredData.model}</span>
                  </li>
                  <li>
                    Rd Expiry Date: &nbsp;{" "}
                    <span>{filteredData.rd_expiry_date}</span>
                  </li>
                  <li>
                    Warranty Expiry Date: &nbsp;{" "}
                    <span>{filteredData.warranty_expiry_date}</span>
                  </li>
                </ul>
                <p className="tab-description">
                  Note: <br /> <span>{filteredData.ticket_description}</span>
                </p>
              </div>
            </div>
            <div className="tab-content content-2">
              <div className="ticketSummary">
                <p>
                  Active Ticket <br />{" "}
                  <span>
                    After Powering on, the POS display a No Signal Message.
                  </span>
                </p>
              </div>
              <div className="ticketSummary">
                <p>
                  In Process <br />{" "}
                  <span>Our technical specialist analysing your complain.</span>
                </p>
              </div>
              <div className="ticketSummary">
                <p>
                  Assigned <br />{" "}
                  <span>
                    Technical specialist - Chandan Kumar has been assigned.
                  </span>
                </p>
              </div>
              <div className="ticketSummary">
                <p>
                  Ticket Closed <br />{" "}
                  <span>Issue resolved - 08-12-2023 05:59 PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="tab-content content-1">
            <div
              className={`tab-pane ${
                activeTab === "pastticket" ? "active" : ""
              }`}
              id="2"
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const renderTable = () => {
    if (isEmpty(ticketList)) {
      return <div className="emptyTable">No Data Available</div>;
    } else {
      let filteredData = [];
      filteredData = filter(ticketList, {
        area: stateValue,
      });
      return (
        <table id="tableListId" className="table-no-border">
          <thead>
            <tr>
              <th>Device No.</th>
              <th>Ticket No.</th>
              <th>Customer Name</th>
              <th>Open Date</th>
              <th>Close Date</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          {filteredData &&
            filteredData.map((list, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{list.device_no}</td>
                    <td>
                      <button
                        className="detailsBtn"
                        onClick={() => handleClick(index)}
                      >
                        {list.ticket_no}
                      </button>
                    </td>
                    <td>{list.customer_name}</td>
                    <td>{list.created_date}</td>
                    <td>{list.close_date}</td>
                    <td>{list.city}</td>
                    <td>
                      <button
                        className={
                          list.status === "open"
                            ? "ticketactive"
                            : "ticketclosed"
                        }
                      >
                        {list.status === "open" ? "Active" : "Closed"}
                      </button>
                    </td>
                  </tr>
                  {isOpen && accordianId === index && (
                    <tr>
                      <td colSpan="8">{renderTab(list.ticket_no)}</td>
                    </tr>
                  )}
                </tbody>
              );
            })}
        </table>
      );
    }
  };

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-12 col-md-12 padding-0">
          <div className="card speed_sc">
            <div className="card-body">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold text-center">
                        Active Ticket
                      </h5>
                    </div>
                  </div>
                  <button
                    className="backBtn backTicketBtn"
                    onClick={() => handleChange()}
                  >
                    Back
                  </button>
                  {renderTable()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ticketList: state.dashboardReducer.ticketList,
  ticketData: state.dashboardReducer.ticketData,
  stateValue: state.dashboardReducer.stateValue,
});

const mapDispatchToProps = {
  getTicketList,
  getTicketData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTicket);
