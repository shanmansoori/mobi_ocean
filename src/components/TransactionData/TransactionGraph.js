import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class TransactionGraph extends Component {
  render() {
    const options = {
      chart: {
        type: "bar",
        height: 230,
      },
      title: {
        text: "",
      },
      credits: { enabled: false },
      xAxis: {
        categories: [
          "Total Transaction Amount",
          "UPI Transactions",
          "Debit Card Transactions",
          "Credit Card Transactions",
        ],
        title: {
          text: null,
        },
        lineWidth: 0,
        labels: {
          x: 0,
          align: "left",
          y: -16,
          style: {
            color: "#06152B",
            fontSize: "16px",
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
            y: -4,
            style: {
              color: "#615E83",
              fontSize: "14px",
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          showInLegend: false,
          data: [
            { y: 999500, color: "#4A3AFF" },
            { y: 505000, color: "#DB5AEE" },
            { y: 255000, color: "#1AD598" },
            { y: 100000, color: "#F9B959" },
          ],
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default TransactionGraph;
