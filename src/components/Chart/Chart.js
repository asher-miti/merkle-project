import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";

import styles from "./Chart.module.css";

const Chart = ({ dailyData }) => {
  const [dateRange, setDateRange] = useState(30);

  if (!dailyData) return null;

  const rangedDailyData = dailyData.slice(30 - dateRange);

  const options = {
    data: rangedDailyData.map(({ cost }) => cost),
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
  };

  const lineChart =
    rangedDailyData.length !== 0 ? (
      <Line
        options={{ scales: { yAxes: [{ id: "first-y-axis", type: "linear" }] } }}
        data={{
          labels: rangedDailyData.map(({ date }) =>
            new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
          ),
          datasets: [options],
        }}
      />
    ) : null;

  return (
    <>
      <Paper style={{ marginBottom: 25, padding: "2%" }} elevation={3}>
        <h2>Client Budget Spending</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Timeframe</FormLabel>
          <RadioGroup row name="dateRange" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <FormControlLabel value="30" control={<Radio />} label="Last 30 days" />
            <FormControlLabel value="21" control={<Radio />} label="Last 21 days" />
            <FormControlLabel value="14" control={<Radio />} label="Last 14 days" />
            <FormControlLabel value="7" control={<Radio />} label="Last 7 days" />
          </RadioGroup>
        </FormControl>
      </Paper>
      <div className={styles.container}>{lineChart}</div>
    </>
  );
};

export default Chart;
