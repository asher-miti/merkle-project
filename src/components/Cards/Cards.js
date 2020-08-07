import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const DataCards = ({ data: { impressions, clicks, conversions, date } }) => {
  if (true) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.impressions)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Impressions
            </Typography>
            <Typography variant="h5">
              {/* <CountUp start={0} end={confirmed.value} duration={2} separator="," /> */}
            </Typography>
            {/* <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> */}
            <Typography variant="body2">Number of impressions from campaign</Typography>
          </CardContent>
        </Grid>
        {/* <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.clicks)}>
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Clicks
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of clicks from campaign</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.conversions)}>
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Conversions
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of conversions from campaign</Typography>
          </CardContent>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default DataCards;
