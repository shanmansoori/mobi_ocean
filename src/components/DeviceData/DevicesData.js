import SoftwareUpdateSection from "../SoftwareUpdate/SoftwareUpdateSection";
import TicketSection from "../TicketData/TicketSection";
import DevicesGraph from "./DevicesGraph";
import DeviceSection from "./DeviceSection";
import { connect } from "react-redux";
import { filter, find, isEmpty } from "lodash";
import SoftwareUpdateTable from "../SoftwareUpdate/SoftwareUpdateTable";

const DevicesData = (props) => {
  const {
    duration,
    areaLevel,
    area,
    deviceData,
    showSoftwareTable,
    changeSoftwareAppSection,
    softwareTableData,
    addBreadcrumbs,
  } = props;

  const deviceCategories = [
    "Last 24 Hour",
    "Last 48 Hour",
    "Last 72 Hour",
    "Over 1 Week",
  ];

  const expiryCategories = [
    "Coming Quarter",
    "Coming Month",
    "Coming Week",
    "Expired",
  ];

  const renderGraphs = (title, categories, height, key) => {
    const deviceGraphData = [];
    let totalCount = {};
    if (!isEmpty(deviceData)) {
      const filteredData = filter(deviceData, {
        area_level: areaLevel,
        duration: duration,
        area: area,
      });

      if (!isEmpty(filteredData)) {
        filteredData.map((item) => {
          if (key === "repair") {
            totalCount = find(filteredData, "device_inRepair_Total");
            if (item.hasOwnProperty("device_inRepair_Last24Hours")) {
              deviceGraphData.push({
                y: item.device_inRepair_Last24Hours,
                color: "#6D3AFF",
              });
            }
            if (item.hasOwnProperty("device_inRepair_Last48Hours")) {
              deviceGraphData.push({
                y: item.device_inRepair_Last48Hours,
                color: "#DB5AEE",
              });
            }
            if (item.hasOwnProperty("device_inRepair_Last72Hours")) {
              deviceGraphData.push({
                y: item.device_inRepair_Last72Hours,
                color: "#1AD598",
              });
            }
            if (item.hasOwnProperty("device_inRepair_Last7days")) {
              deviceGraphData.push({
                y: item.device_inRepair_Last7days,
                color: "#F9B959",
              });
            }
          }
          if (key === "warrantyExpiry") {
            totalCount = find(filteredData, "device_warranteeExpiry_total");
            if (item.hasOwnProperty("device_warranteeExpiry_inaQuarter")) {
              deviceGraphData.push({
                y: item.device_warranteeExpiry_inaQuarter,
                color: "#6D3AFF",
              });
            }
            if (item.hasOwnProperty("device_warranteeExpiry_inaMonth")) {
              deviceGraphData.push({
                y: item.device_warranteeExpiry_inaMonth,
                color: "#DB5AEE",
              });
            }
            if (item.hasOwnProperty("device_warranteeExpiry_inaWeek")) {
              deviceGraphData.push({
                y: item.device_warranteeExpiry_inaWeek,
                color: "#1AD598",
              });
            }
            if (item.hasOwnProperty("device_warranteeExpiry_in72Hours")) {
              deviceGraphData.push({
                y: item.device_warranteeExpiry_in72Hours,
                color: "#F9B959",
              });
            }
          }
          if (key === "RDExpiry") {
            totalCount = find(filteredData, "device_RDServiceExpiry_total");
            if (item.hasOwnProperty("device_RDServiceExpiry_inaQuarter")) {
              deviceGraphData.push({
                y: item.device_RDServiceExpiry_inaQuarter,
                color: "#6D3AFF",
              });
            }
            if (item.hasOwnProperty("device_RDServiceExpiry_inaMonth")) {
              deviceGraphData.push({
                y: item.device_RDServiceExpiry_inaMonth,
                color: "#DB5AEE",
              });
            }
            if (item.hasOwnProperty("device_RDServiceExpiry_inaWeek")) {
              deviceGraphData.push({
                y: item.device_RDServiceExpiry_inaWeek,
                color: "#1AD598",
              });
            }
            if (item.hasOwnProperty("device_RDServiceExpiry_in72Hours")) {
              deviceGraphData.push({
                y: item.device_RDServiceExpiry_in72Hours,
                color: "#F9B959",
              });
            }
          }
        });
      }
    }
    return (
      <div className="card speed_sc">
        <div className="card-body">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold text-center">
                    {title}
                  </h5>
                </div>
              </div>
              <div className="act_box w-auto new_cl mb-9">
                <p className="ac1">Total</p>
                <p className="ac2">
                  {key === "repair"
                    ? isEmpty(totalCount)
                      ? 0
                      : totalCount.device_inRepair_Total.toLocaleString()
                    : key === "warrantyExpiry"
                    ? isEmpty(totalCount)
                      ? 0
                      : totalCount.device_warranteeExpiry_total.toLocaleString()
                    : isEmpty(totalCount)
                    ? 0
                    : totalCount.device_RDServiceExpiry_total.toLocaleString()}
                </p>
              </div>
              <DevicesGraph
                data={deviceGraphData}
                categories={categories}
                height={height}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="col-lg-7">
        <div className="row">
          <DeviceSection
            duration={duration}
            areaLevel={areaLevel}
            area={area}
          />
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
      <div className="col-lg-12">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-4">
            {renderGraphs(
              "Device Under repair",
              deviceCategories,
              250,
              "repair"
            )}
          </div>
          <div className="col-lg-4 col-md-4 padding-0">
            {renderGraphs(
              "Warranty expiry",
              expiryCategories,
              250,
              "warrantyExpiry"
            )}
          </div>
          <div className="col-lg-4 col-md-4">
            {renderGraphs(
              "RD service expiry",
              expiryCategories,
              250,
              "RDExpiry"
            )}
          </div>
          <TicketSection />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  deviceData: state.dashboardReducer.deviceData,
});

export default connect(mapStateToProps, {})(DevicesData);
