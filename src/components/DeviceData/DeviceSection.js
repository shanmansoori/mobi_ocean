import DeviceSectionGraph from "./DeviceSectionGraph";
import { connect } from "react-redux";
import { filter, find, isEmpty } from "lodash";
import { useLocation } from "react-router-dom";

const DeviceSection = (props) => {
  const { deviceData, duration, areaLevel, deviceAppData, area, tickets } =
    props;
  const location = useLocation();
  const { pathname } = location;

  const renderDeviceData = () => {
    const deviceGraphData = [],
      ticketGraphData = [];
    let totalDevicesCount = {},
      totalTicketCount = {};
    if (!isEmpty(deviceData)) {
      const filteredData = filter(deviceData, {
        area_level: areaLevel,
        duration: duration,
        area: area,
      });
      totalDevicesCount = find(filteredData, "device_total_active_count");

      if (!isEmpty(filteredData)) {
        filteredData.map((item) => {
          if (item.hasOwnProperty("device_total_ordered_count")) {
            deviceGraphData.push({
              name: "Total Ordered",
              y: item.device_total_ordered_count,
            });
          }
          if (item.hasOwnProperty("device_total_shipped_count")) {
            deviceGraphData.push({
              name: "Total Shipped",
              // y:
              //   item.device_total_ordered_count -
              //   item.device_total_shipped_count,
              y: item.device_total_shipped_count,
            });
          }
          if (item.hasOwnProperty("device_total_deployed_count")) {
            const shippedCount =
              item.device_total_ordered_count - item.device_total_shipped_count;
            deviceGraphData.push({
              name: "Total Deployed",
              // y: shippedCount - item.device_total_deployed_count,
              y: item.device_total_deployed_count,
            });
          }
        });
      }
    }

    if (!isEmpty(tickets)) {
      const filteredData = filter(tickets, {
        area_level: areaLevel,
        duration: duration,
        area: area,
      });
      totalTicketCount = find(filteredData, "total_tickets");

      if (!isEmpty(filteredData)) {
        filteredData.map((item) => {
          if (item.hasOwnProperty("active_tickets_last24Hour")) {
            ticketGraphData.push({
              name: "Last 24 Hour",
              y: item.active_tickets_last24Hour,
            });
          }
          if (item.hasOwnProperty("active_tickets_last48Hour")) {
            ticketGraphData.push({
              name: "Last 48 Hour",
              y: item.active_tickets_last48Hour,
            });
          }
          if (item.hasOwnProperty("active_tickets_last72Hour")) {
            ticketGraphData.push({
              name: "Last 72 Hour",
              y: item.active_tickets_last72Hour,
            });
          }
          if (item.hasOwnProperty("active_tickets_lastweek")) {
            ticketGraphData.push({
              name: "Over 1 week",
              y: item.active_tickets_lastweek,
            });
          }
        });
      }
    }

    return (
      <>
        <div className="d-block align-items-center justify-content-between mb-9">
          <div className="mb-3 mb-sm-0">
            <h5 className="card-title fw-semibold text-center">
              {pathname === "/dashboard/tickets"
                ? "Current status for a specific device"
                : "Device Data"}
            </h5>
            {pathname === "/dashboard/tickets" ? (
              <p className="ac2 text-center" style={{ color: "#1DB636" }}>
                {`${
                  isEmpty(totalTicketCount)
                    ? 0
                    : totalTicketCount.total_tickets.toLocaleString()
                } total count`}
              </p>
            ) : (
              <p className="ac2 text-center" style={{ color: "#1DB636" }}>{`${
                isEmpty(totalDevicesCount)
                  ? 0
                  : totalDevicesCount.device_total_active_count.toLocaleString()
              } total active count`}</p>
            )}
          </div>
        </div>
        {pathname === "/dashboard/tickets" ? (
          !isEmpty(ticketGraphData) ? (
            <DeviceSectionGraph data={ticketGraphData} />
          ) : (
            <div className="emptyTable">No Data Available</div>
          )
        ) : !isEmpty(deviceGraphData) ? (
          <DeviceSectionGraph data={deviceGraphData} />
        ) : (
          <div className="emptyTable">No Device Data Available</div>
        )}
      </>
    );
  };

  return (
    <div
      className={
        pathname === "/dashboard/devices"
          ? isEmpty(deviceAppData)
            ? "col-lg-12 col-md-12"
            : "col-lg-6 col-md-6 padding-0"
          : "col-lg-5 col-md-5 padding-0"
      }
    >
      <div className="card speed_sc">
        <div
          className={`${
            pathname === "/dashboard"
              ? "dev_dt1"
              : pathname === "/dashboard/devices"
              ? "dev_dt2"
              : pathname === "/dashboard/tickets"
              ? "dev_dt3"
              : ""
          } card-body`}
        >
          <div className=" align-items-start">
            <div className="col-12">{renderDeviceData()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceData: state.dashboardReducer.deviceData,
  deviceDataError: state.dashboardReducer.deviceDataError,
  deviceAppData: state.dashboardReducer.deviceAppData,
  tickets: state.dashboardReducer.tickets,
});

export default connect(mapStateToProps, {})(DeviceSection);
