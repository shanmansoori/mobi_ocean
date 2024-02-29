import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class TicketGraph extends Component {
  render() {
    const options = {
      chart: {
        type: "column",
        height: 185,
      },
      title: {
        text: "",
      },
      credits: { enabled: false },
      xAxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        style: {
          color: "#615E83",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          fontFamily: "inherit",
          position: "vertical",
          whiteSpace: "nowrap",
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          style: {
            color: "#615E83",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "inherit",
          },
        },
      },
      plotOptions: {
        series: {
          pointWidth: 15,
        },
        style: {
          color: "#615E83",
          fontSize: "14px",
        },
      },
      series: [
        {
          name: "Last Month",
          data: [706292, 260000, 307000, 683000],
          color: "#962DFF",
        },
        {
          name: "This Month",
          data: [610860, 136000, 550000, 141000],
          color: "#FCB5C3",
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default TicketGraph;
