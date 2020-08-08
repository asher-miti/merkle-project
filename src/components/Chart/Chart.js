import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { Paper } from "@material-ui/core";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";

// https://material-ui.com/components/tables/

const Chart = ({ dailyData }) => {
  // this.state = {
  //   dateRange: "7",
  //   chartData: "",
  // };

  if (!dailyData) {
    return null;
  }

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        options={{
          scales: {
            yAxes: [
              {
                id: "first-y-axis",
                type: "logarithmic",
              },
            ],
          },
        }}
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toDateString()),
          datasets: [
            {
              data: dailyData.map(({ impressions }) => impressions),
              label: "impressions",
              borderColor: "#f78c2a",
              fill: false,
            },
            {
              data: dailyData.map(({ clicks }) => clicks),
              label: "clicks",
              borderColor: "green",
              fill: false,
            },
            {
              data: dailyData.map(({ conversions }) => conversions),
              label: "conversions",
              borderColor: "blue",
              fill: false,
            },
            {
              data: dailyData.map(({ cost }) => cost),
              label: "Cost",
              borderColor: "red",
              fill: false,
            },
          ],
        }}
      />
    ) : null;

  return (
    <Paper className={styles.container}>
      {/* 
      <header className="chart-header">
        <h2>Client Budget Spending</h2>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="date-range" name="dateRange" value={this.state.dateRange}>
            <FormControlLabel
              value="30"
              control={<Radio />}
              label="Last 30 days"
              onClick={() => this.setDateRange("30")}
            />
            <FormControlLabel
              value="21"
              control={<Radio />}
              label="Last 21 days"
              onClick={() => this.setDateRange("21")}
            />
            <FormControlLabel
              value="14"
              control={<Radio />}
              label="Last 14 days"
              onClick={() => this.setDateRange("14")}
            />
            <FormControlLabel
              value="7"
              control={<Radio />}
              label="Last 7 days"
              onClick={() => this.setDateRange("7")}
            />
          </RadioGroup>
        </FormControl>
      </header> */}
      {lineChart}
    </Paper>
  );
};

export default Chart;
