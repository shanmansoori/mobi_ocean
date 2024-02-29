import { useEffect, useState } from "react";
import TicketSection from "../TicketData/TicketSection";
import DeviceSection from "../DeviceData/DeviceSection";
import SoftwareUpdateSection from "../SoftwareUpdate/SoftwareUpdateSection";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { Link, useLocation } from "react-router-dom";
import ListView from "../ListView/ListView";
import DevicesData from "../DeviceData/DevicesData";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SoftwareUpdateTable from "../SoftwareUpdate/SoftwareUpdateTable";
import TicketData from "../TicketData/TicketData";
import ActiveTicket from "../TicketData/ActiveTicket";

const DashboardContent = (props) => {
  const { deviceCount, ticketCount } = props;
  const [listView, setListView] = useState(true);
  const [duration, setDuration] = useState("last_week");
  const [filterValue, setFilterValue] = useState("");
  const [filterList, setFilterList] = useState("");
  const [area, setArea] = useState("India");
  const [areaLevel, setAreaLevel] = useState("country");
  const [showDistrict, setShowDistrict] = useState(false);
  const [showSoftwareTable, setShowSoftwareTable] = useState(false);
  const [softwareTableData, setSoftwareTableData] = useState("");
  const [areaParent, setAreaParent] = useState("");
  const [breadcrumbs, setBreadcrumbs] = useState(["India"]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/dashboard/tickets") {
      if (!listView && !isEmpty(ticketCount) && !showDistrict) {
        if (filterValue === "state") {
          setFilterList(ticketCount.States);
        } else {
          setFilterList(ticketCount.Organizations);
        }
      }
    } else {
      if (!listView && !isEmpty(deviceCount) && !showDistrict) {
        if (filterValue === "state") {
          setFilterList(deviceCount.States);
        } else {
          setFilterList(deviceCount.Organizations);
        }
      }
    }
  }, [deviceCount, listView, ticketCount, pathname, filterValue, showDistrict]);

  const changeView = (val) => {
    setListView(val);
    if (val === true) {
      setShowDistrict(false);
      setAreaLevel("country");
      setArea("India");
      setFilterValue("list_view");
      addBreadcrumbs("List View");
    }
  };

  const changeFilter = (value) => {
    setFilterValue(value);
    setListView(false);
    setShowDistrict(false);
    changeSoftwareAppSection("", false);
    setArea("India");
    addBreadcrumbs(value);
    if (pathname === "/dashboard/tickets") {
      if (!isEmpty(ticketCount)) {
        if (value === "state") {
          setFilterList(ticketCount.States);
        } else {
          setFilterList(ticketCount.Organizations);
        }
      }
    } else {
      if (!isEmpty(deviceCount)) {
        if (value === "state") {
          setFilterList(deviceCount.States);
        } else {
          setFilterList(deviceCount.Organizations);
        }
      }
    }
  };

  const changeDuration = (value) => {
    setDuration(value);
    changeSoftwareAppSection("", false);
    addBreadcrumbs(value);
  };

  const changeArea = (val) => {
    setArea(val);
  };

  const changeAreaLevel = (val) => {
    setAreaLevel(val);
  };

  const showDistrictList = (val) => {
    setShowDistrict(val);
  };

  const changeAreaParent = (val) => {
    setAreaParent(val);
  };

  const changeSoftwareAppSection = (data, val) => {
    setShowSoftwareTable(val);
    setSoftwareTableData(data);
  };

  const addBreadcrumbs = (val) => {
    setBreadcrumbs((oldvalue) => [...oldvalue, val]);
  };

  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <Breadcrumb title="Dashboard" breadcrumbs={breadcrumbs} />
        {pathname === "/dashboard/tickets/activetickets" ? (
          <ActiveTicket addBreadcrumbs={addBreadcrumbs} />
        ) : (
          <div className="row">
            <ListView
              changeView={changeView}
              changeFilter={changeFilter}
              changeDuration={changeDuration}
              area={area}
              changeArea={changeArea}
              changeAreaLevel={changeAreaLevel}
              duration={duration}
              listView={listView}
              filterValue={filterValue}
              filterList={filterList}
              setFilterList={setFilterList}
              showDistrict={showDistrict}
              showDistrictList={showDistrictList}
              areaLevel={areaLevel}
              setFilterValue={setFilterValue}
              changeSoftwareAppSection={changeSoftwareAppSection}
              areaParent={areaParent}
              changeAreaParent={changeAreaParent}
              addBreadcrumbs={addBreadcrumbs}
            />
            {pathname === "/" || pathname === "/dashboard" ? (
              <>
                <div className="col-lg-7 ">
                  <div className="row">
                    <Link
                      to={{ pathname: "/dashboard/tickets" }}
                      onClick={() => addBreadcrumbs("Tickets")}
                    >
                      <TicketSection />
                    </Link>
                    <Link
                      to={{ pathname: "/dashboard/devices" }}
                      onClick={() => addBreadcrumbs("Devices")}
                    >
                      <DeviceSection
                        duration={duration}
                        areaLevel={areaLevel}
                        area={area}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    {!showSoftwareTable ? (
                      <SoftwareUpdateSection
                        duration={duration}
                        areaLevel={areaLevel}
                        area={area}
                        changeSoftwareAppSection={changeSoftwareAppSection}
                      />
                    ) : (
                      <SoftwareUpdateTable
                        softwareTableData={softwareTableData}
                        area={area}
                        changeSoftwareAppSection={changeSoftwareAppSection}
                        addBreadcrumbs={addBreadcrumbs}
                      />
                    )}
                  </div>
                </div>
              </>
            ) : pathname === "/dashboard/devices" ? (
              <DevicesData
                duration={duration}
                areaLevel={areaLevel}
                area={area}
                showSoftwareTable={showSoftwareTable}
                changeSoftwareAppSection={changeSoftwareAppSection}
                softwareTableData={softwareTableData}
                addBreadcrumbs={addBreadcrumbs}
              />
            ) : (
              <TicketData
                duration={duration}
                areaLevel={areaLevel}
                area={area}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
  ticketCount: state.dashboardReducer.ticketCount,
});

export default connect(mapStateToProps, {})(DashboardContent);
