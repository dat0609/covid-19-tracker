import { Grid } from "@material-ui/core";
import React from "react";
import HighLightChart from "./HighLightChart";

Highlight.propTypes = {};

function Highlight(props) {
  const { report } = props;
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "Cases",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Recovered",
      count: data.Confirmed - data.Deaths,
      type: "recovered",
    },
    {
      title: "Deaths",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} key={item.title}>
          <HighLightChart
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
