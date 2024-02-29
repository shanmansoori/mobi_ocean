import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class TicketDataGraph extends Component {
  render() {
    const { data, categories } = this.props;
    // const data = [
    //   { y: 999999, color: "#962DFF" },
    //   { y: 888888, color: "#E0C6FD" },
    //   { y: 555555, color: "#bdacef" },
    //   { y: 222222, color: "#962DFF" },
    //   { y: 777777, color: "#E0C6FD" },
    //   { y: 666666, color: "#bdacef" },
    // ];
    const options = {
      chart: {
        type: "bar",
        height: 250,
      },
      title: {
        text: "",
        align: "left",
      },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
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

export default TicketDataGraph;
