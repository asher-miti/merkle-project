import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { id, name, logo, data: dailyData } }) => {
  if (!id) {
    return "Loading...";
  }

  const { clicks, conversions, cost, impressions, date } = dailyData[dailyData.length - 1];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.impressions)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Impressions
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={impressions} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
            <Typography variant="body2">Number of impressions from campaign</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.clicks)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Clicks
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={clicks} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
            <Typography variant="body2">Number of clicks from campaign</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.conversions)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Conversions
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={conversions} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
            <Typography variant="body2">Number of conversions from campaign</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.conversions)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Cost
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cost} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
            <Typography variant="body2">Cost</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
