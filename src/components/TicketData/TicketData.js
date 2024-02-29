import { isEmpty, filter } from "lodash";
import DeviceSection from "../DeviceData/DeviceSection";
import TicketDataGraph from "./TicketDataGraph";
import TicketSection from "./TicketSection";
import { connect } from "react-redux";

const TicketData = (props) => {
  const { ticketTopIssues, duration, areaLevel, area } = props;

  const calculateGraphData = (filteredTicketData) => {
    const finalData = [],
      categories = [];
    filteredTicketData.map((item, index) => {
      categories.push(item.issue_name);
      finalData.push({
        y: item.issue_count,
        color: "#E0C6FD",
      });
    });
    return <TicketDataGraph data={finalData} categories={categories} />;
  };

  const renderTicketGraph = () => {
    let filteredTicketData = [];
    if (!isEmpty(ticketTopIssues)) {
      filteredTicketData = filter(ticketTopIssues, {
        area_level: areaLevel,
        duration: duration,
        area: area,
      });
    }
    return (
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="card speed_sc graphContainer">
              <div className="card-body">
                <div className=" align-items-start">
                  <div className="col-12">
                    <div className="row">
                      <div className="d-block align-items-center justify-content-between mb-9">
                        <div className="mb-3 mb-sm-0">
                          <h5 className="card-title fw-semibold text-center">
                            {!isEmpty(filteredTicketData)
                              ? `Top ${filteredTicketData.length} issues raised in duration`
                              : `No issues raised in duration`}
                          </h5>
                        </div>
                      </div>
                      {!isEmpty(filteredTicketData)
                        ? calculateGraphData(filteredTicketData)
                        : null}
                    </div>
                  </div>
                </div>
              </div>
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
          <TicketSection />
          <DeviceSection
            duration={duration}
            areaLevel={areaLevel}
            area={area}
          />
        </div>
      </div>
      {renderTicketGraph()}
    </>
  );
};

const mapStateToProps = (state) => ({
  ticketTopIssues: state.dashboardReducer.ticketTopIssues,
});

export default connect(mapStateToProps)(TicketData);
