import { Button, ButtonGroup } from "@material-ui/core";
import Highchart from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import React, { useEffect, useState } from "react";

LineChart.propTypes = {};

const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));

  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Total",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
      endOnTick: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Total cases",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};

function LineChart(props) {
  const { data } = props;
  const [option, setOption] = useState({});
  const [selectBtn, setSelectBtn] = useState("all");

  useEffect(() => {
    let customData = [];
    switch (selectBtn) {
      case "all":
        customData = data;
        break;
      case "7":
        customData = data.slice(data.length - 7);
        break;
      case "30":
        customData = data.slice(data.length - 30);
        break;
      default:
        customData = data;
        break;
    }
    setOption(generateOptions(customData));
  }, [data, selectBtn]);

  return (
    <div>
      <ButtonGroup
        size="small"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          color={selectBtn === "all" ? "secondary" : ""}
          onClick={() => setSelectBtn("all")}
        >
          All
        </Button>
        <Button
          color={selectBtn === "30" ? "secondary" : ""}
          onClick={() => setSelectBtn("30")}
        >
          30 days
        </Button>
        <Button
          color={selectBtn === "7" ? "secondary" : ""}
          onClick={() => setSelectBtn("7")}
        >
          7 days
        </Button>
      </ButtonGroup>
      <HighchartsReact
        highcharts={Highchart}
        options={option}
      ></HighchartsReact>
    </div>
  );
}

export default LineChart;
