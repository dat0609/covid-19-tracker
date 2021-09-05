import { Box, Grid } from "@material-ui/core";
import React from "react";
import Skeleton from "react-loading-skeleton";

function LineChartSkeleton(props) {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item key={{}} sx={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="text" width={800} height={500}></Skeleton>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LineChartSkeleton;
