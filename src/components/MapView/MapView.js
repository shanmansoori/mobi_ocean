import React from "react";
import "./MapView.css";
import { connect } from "react-redux";
import { isEmpty, get, toLower, replace, filter } from "lodash";
import { allStateList } from "../Dashboard/DashboardConstant";
import { useLocation } from "react-router-dom";

const MapView = (props) => {
  const {
    deviceCount,
    ticketCount,
    changeArea,
    changeAreaLevel,
    deviceData,
    showDistrictList,
    changeView,
    setFilterList,
    duration,
    setFilterValue,
    changeSoftwareAppSection,
    tickets,
    addBreadcrumbs,
  } = props;
  const location = useLocation();
  const { pathname } = location;

  const handleChange = (value) => {
    if (pathname === "/dashboard/tickets") {
      if (!isEmpty(tickets)) {
        const list = filter(tickets, {
          duration: duration,
          area_parent: value,
          area_level: "district",
        });
        setFilterList(list);
      }
    } else {
      if (!isEmpty(deviceData)) {
        const list = filter(deviceData, {
          duration: duration,
          area_parent: value,
          area_level: "district",
        });
        setFilterList(list);
      }
    }
    changeArea(value);
    changeAreaLevel("state");
    showDistrictList(true);
    changeView(false);
    setFilterValue("state");
    changeSoftwareAppSection("", false);
    addBreadcrumbs(value);
  };

  const getCounts = (counts, finalStateList) => {
    if (!isEmpty(counts)) {
      const statesList = get(counts, "States");
      const difference = allStateList.filter(
        (obj1) => !statesList.some((obj2) => obj1.name === obj2.CategoryName)
      );
      if (!isEmpty(statesList)) {
        statesList.map((list) => {
          finalStateList.push({
            name: list.CategoryName,
            count: list.TotalDevice,
            className:
              list.CategoryName === "Jammu and Kashmir"
                ? "jammu"
                : replace(toLower(list.CategoryName), " ", "-"),
          });
        });
        difference.map((list) => {
          finalStateList.push({
            name: list.name,
            className: `${replace(
              toLower(list.name),
              " ",
              "-"
            )} statesNotPresent`,
          });
        });
      }
    }
  };

  const renderMap = () => {
    const finalStateList = [];
    if (pathname === "/dashboard/tickets") {
      getCounts(ticketCount, finalStateList);
    } else {
      getCounts(deviceCount, finalStateList);
    }
    return (
      <div className="col-md-12">
        <img className="vw1" src="/images/Map.png" alt="map" />{" "}
        {finalStateList.map((list, index) => {
          return (
            <div
              className={
                list.className !== "statesNotPresent"
                  ? `${list.className} stateContainer`
                  : list.className
              }
              key={index}
              onClick={() => handleChange(list.name)}
            >
              {list.name}
              <br />
              <span>{list.count}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return <div className="row align-items-center">{renderMap()}</div>;
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
  deviceData: state.dashboardReducer.deviceData,
  ticketCount: state.dashboardReducer.ticketCount,
  tickets: state.dashboardReducer.tickets,
});

export default connect(mapStateToProps, {})(MapView);
