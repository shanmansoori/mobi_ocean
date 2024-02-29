import { useLocation } from "react-router-dom";
import TicketGraph from "./TicketGraph";

const TicketSection = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={`${
        pathname === "/dashboard/devices"
          ? "col-lg-12 col-md-12"
          : "col-lg-7 col-md-7 padding-0"
      }`}
    >
      <div className="card">
        <div className="card-body">
          <div className=" align-items-center">
            <div className="d-block align-items-center justify-content-between mb-9">
              <div className="mb-3 mb-sm-0">
                <h5 className="card-title fw-semibold text-center">
                  {pathname === "/dashboard/devices" ||
                  pathname === "/dashboard/tickets"
                    ? "Active device"
                    : "Ticket Data"}
                </h5>
              </div>
            </div>
            {pathname === "/dashboard/devices" ||
            pathname === "/dashboard/tickets" ? null : (
              <div className="act_box w-auto">
                <p className="ac1">
                  Active tickets <span>(unresolved)</span>
                </p>
                <p className="ac2">9,99,999</p>
              </div>
            )}
            <div className="row">
              {pathname === "/dashboard/devices" ||
              pathname === "/dashboard/tickets" ? null : (
                <>
                  <div className="col-md-6">
                    <div className="col-box-6">
                      <p>
                        Open in duration <span>9,99,999</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-box-6">
                      <p>
                        Closed in duration <span>9,99,999</span>
                      </p>
                    </div>
                  </div>
                </>
              )}
              <div className="col-md-12">
                <div className="map2 text-center">
                  {pathname === "/dashboard/devices" ||
                  pathname === "/dashboard/tickets" ? (
                    <>
                      <p className="tm1">
                        Time over time comparative data (Active)
                      </p>
                      <p className="tm2">
                        9,99,999 <span>past 30 days</span>
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
              {pathname === "/dashboard/devices" ||
              pathname === "/dashboard/tickets" ? (
                <>
                  <div className="col-md-6">
                    <div className="select-box-6">
                      <p>Comparison criteria 1</p>
                      <select className="form-select">
                        <option defaultValue="0"> Past Month</option>
                        <option value="1">March 2023</option>
                        <option value="2">April 2023</option>
                        <option value="3">May 2023</option>
                        <option value="4">June 2023</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="select-box-6">
                      <p>Comparison criteria 2</p>
                      <select className="form-select">
                        <option defaultValue="0"> Present Month</option>
                        <option value="1">March 2023</option>
                        <option value="2">April 2023</option>
                        <option value="3">May 2023</option>
                        <option value="4">June 2023</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : null}
              <div className="col-md-12">
                <div
                  className={`map2 ${
                    pathname === "/dashboard/tickets" ? "th2" : "th1"
                  }`}
                >
                  <TicketGraph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
