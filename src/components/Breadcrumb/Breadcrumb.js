import React from "react";
import "./Breadcrumb.css";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  const { breadcrumbs } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleChange = () => {
    navigate(-1);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="pagetitle">
          {pathname === "/" || pathname === "/dashboard"
            ? "Dashboard"
            : pathname === "/dashboard/devices"
            ? "Device Dashboard"
            : "Ticket Dashboard"}
        </li>
        <br />
        {breadcrumbs.map((item, index) => {
          return (
            <li
              className={`breadcrumb-item ${
                index === 0 ? "titleHeading" : "titleSubheading"
              }`}
              key={index}
              onClick={handleChange}
            >
              {index === 0
                ? pathname === "/dashboard"
                  ? "India-dashboard"
                  : pathname === "/dashboard/devices"
                  ? "India-devices"
                  : pathname === "/dashboard/tickets"
                  ? "India-tickets"
                  : pathname === "/dashboard/tickets/activetickets"
                  ? "India-active-tickets"
                  : item
                : item}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
