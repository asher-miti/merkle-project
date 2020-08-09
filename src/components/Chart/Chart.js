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

  const options = { day: "numeric", month: "short" };

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
                type: "linear",
              },
            ],
          },
        }}
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString("en-GB", options)),
          datasets: [
            {
              data: dailyData.map(({ cost }) => cost),
              label: "Cost (£)",
              fontFamily: "'Arial', sans-serif",
              fontSize: "20px",
              borderColor: "rgba(247,140,42,1)",
              backgroundColor: "rgba(246,161,84,.4)",
              borderCapStyle: "butt",
              borderDash: [],
              fill: true,
              borderJoinStyle: "miter",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
            },
          ],
        }}
      />
    ) : null;

  return (
    <>
      <Paper className={styles.container}>
        {lineChart}
        {/* <header className="chart-header">
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
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Today"
              onClick={() => this.setDateRange("1")}
            />
          </RadioGroup>
        </FormControl>
      </header> */}
      </Paper>
    </>
  );
};

export default Chart;

// options={{
//   scales: {
//     yAxes: [
//       {
//         id: "first-y-axis",
//         type: "logarithmic",
//       },
//     ],
//   },
// }}

/* {
  data: dailyData.map(({ impressions }) => impressions),
  label: "Impressions",
  borderColor: "orange",
  fill: false,
},
{
  data: dailyData.map(({ clicks }) => clicks),
  label: "Clicks",
  borderColor: "blue",
  fill: false,
},
{
  data: dailyData.map(({ conversions }) => conversions),
  label: "Conversions",
  borderColor: "green",
  fill: false,
}, */
