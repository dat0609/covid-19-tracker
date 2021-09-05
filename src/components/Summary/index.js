import { Grid } from "@material-ui/core";
import React from "react";
import HighMap from "../Charts/HighMap/HighMap";
import LineChart from "../Charts/LineChart/LineChart";

Summary.propTypes = {};

function Summary(props) {
  const { report, selectedCountryId } = props;
  //  const [mapData, setMapData] = useState({});

  //   useEffect(() => {
  //     if (selectedCountryId) {
  //       import(
  //         `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
  //       ).then((res) => setMapData(res));
  //     }
  //   }, [selectedCountryId]);
  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMap />
      </Grid>
    </Grid>
  );
}

export default Summary;
