import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";
import {
  getToken,
  getDeviceData,
  getDeviceWiseCount,
  getDeviceAppData,
  getTicketWiseCount,
  getTickets,
  getTicketTopIssues,
} from "../../actions/DashboardActions";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const {
    getToken,
    getDeviceData,
    getDeviceWiseCount,
    getDeviceAppData,
    getTicketWiseCount,
    getTickets,
    getTicketTopIssues,
    loading,
  } = props;

  useEffect(() => {
    getToken();
    getDeviceData();
    getDeviceWiseCount();
    getDeviceAppData();
    getTicketWiseCount();
    getTickets();
    getTicketTopIssues();
  }, [
    getToken,
    getDeviceData,
    getDeviceWiseCount,
    getDeviceAppData,
    getTicketWiseCount,
    getTickets,
    getTicketTopIssues,
  ]);

  return (
    <div id="main-wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <Header />
        {loading ? (
          <div className="loader" id="loader-1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <DashboardContent />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.dashboardReducer.loading,
});

const mapDispatchToProps = {
  getToken,
  getDeviceData,
  getDeviceWiseCount,
  getDeviceAppData,
  getTicketWiseCount,
  getTickets,
  getTicketTopIssues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
