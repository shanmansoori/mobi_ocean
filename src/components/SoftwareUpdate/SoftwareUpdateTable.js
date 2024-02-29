import { filter, isEmpty } from "lodash";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const SoftwareUpdateTable = (props) => {
  const {
    softwareTableData,
    deviceAppData,
    area,
    changeSoftwareAppSection,
    addBreadcrumbs,
  } = props;
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    addBreadcrumbs("software-data");
  }, []);

  const renderTable = () => {
    if (isEmpty(softwareTableData)) {
      return <div className="emptyTable">No Data Available</div>;
    } else {
      let filteredData = [];
      if (!isEmpty(deviceAppData)) {
        filteredData = filter(deviceAppData, {
          area_parent: area,
          duration: softwareTableData.duration,
          // app_name: softwareTableData.app_name,
        });

        if (isEmpty(filteredData)) {
          return <div className="emptyTable">No Data Available</div>;
        } else {
          return (
            <>
              <div className="map2">
                <p className="tm3">{`${
                  softwareTableData.app_name +
                  " " +
                  `(${softwareTableData.version_no})`
                }`}</p>
                <p className="tm4">Published Date: 23/11/2023</p>
              </div>
              <table id="tableListId">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Total Device</th>
                    <th>Pushed devices</th>
                    <th>Installed devices</th>
                    <th>Pending devices</th>
                  </tr>
                </thead>
                {filteredData &&
                  filteredData.map((list, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{list.area}</td>
                          <td style={{ backgroundColor: "#e2e8fe" }}>
                            {list.total_device_count.toLocaleString()}
                          </td>
                          <td>{list.pushed_device_count.toLocaleString()}</td>
                          <td>
                            {list.installed_device_count.toLocaleString()}
                          </td>
                          <td>
                            {(
                              list.pushed_device_count -
                              list.installed_device_count
                            ).toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </>
          );
        }
      }
    }
  };

  const renderSoftwareData = () => {
    return (
      <div className="col-12">
        <div className="d-block align-items-center justify-content-between mb-9">
          <div className="mb-3 mb-sm-0">
            <h5 className="card-title fw-semibold text-center">
              Software Data
            </h5>
            <p
              className="ac2 text-center"
              style={{ color: "#1DB636" }}
            >{`${area} Total Count: ${
              isEmpty(softwareTableData)
                ? 0
                : softwareTableData.total_device_count.toLocaleString()
            }`}</p>
          </div>
        </div>
        <button
          className="backBtn"
          onClick={() => changeSoftwareAppSection("", false)}
        >
          Back
        </button>
        {renderTable()}
      </div>
    );
  };

  return (
    <div
      className={`${
        pathname === "/dashboard/devices"
          ? "col-lg-6 col-md-6 padding-0"
          : "col-lg-12 col-md-12"
      }`}
    >
      <div className="card speed_sc graphContainer">
        <div
          className={`${
            pathname === "/dashboard/devices" ? "dev_dt2" : ""
          } card-body`}
        >
          <div className=" align-items-start">{renderSoftwareData()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceAppData: state.dashboardReducer.deviceAppData,
});

export default connect(mapStateToProps, {})(SoftwareUpdateTable);
