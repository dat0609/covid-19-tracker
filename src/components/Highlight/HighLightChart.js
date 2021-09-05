import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed") return { borderLeft: "5px solid #c9302c" };
    if (props.type === "recovered") return { borderLeft: "5px solid #28a745" };
    else return { borderLeft: "5px solid gray" };
  },
  title: { fontSize: 18, marginBottom: 5 },
  count: { fontWeight: "bold", fontSize: 18 },
});

function HighLightChart(props) {
  const { title, count, type } = props;

  const classes = useStyles({ type });

  return (
    <Card className={classes.wrapper}>
      <CardContent>
        <Typography component="p" variant="body2" className={classes.title}>
          {title}
        </Typography>
        <Typography component="span" variant="body2" className={classes.count}>
          <CountUp end={isNaN(count) ? "" : count} duration={2} separator=" " />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighLightChart;
