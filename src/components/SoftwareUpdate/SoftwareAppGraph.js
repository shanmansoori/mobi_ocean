import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class SoftwareAppGraph extends Component {
  render() {
    const { data, height, title, subtitle } = this.props;
    const options = {
      chart: {
        type: "bar",
        height: height,
      },
      title: {
        text: title,
        align: "left",
        style: {
          fontWeight: 100,
        },
      },
      subtitle: {
        text: subtitle,
        align: "left",
        style: {
          fontSize: "12px",
          color: "#222",
        },
      },
      credits: { enabled: false },
      xAxis: {
        categories: ["Pushed", "Installed", "Remaining"],
        title: {
          text: null,
        },
        lineWidth: 0,
        labels: {
          style: {
            color: "#06152B",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          },
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
        bar: {
          dataLabels: {
            enabled: true,
            x: 0,
            align: "left",
            reserveSpace: false,
            y: -5,
            style: {
              color: "#06152B",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            },
          },
        },
      },
      series: [
        {
          showInLegend: false,
          pointWidth: 15,
          data: data,
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default SoftwareAppGraph;
