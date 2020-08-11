import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Chart.module.css";

const Chart = ({ dailyData }) => {
  const [dateRange, setDateRange] = useState(30);
  const [selectedValue, setSelectedValue] = React.useState("30");

  if (!dailyData) return null;

  const rangedDailyData = dailyData.slice(30 - dateRange);

  // Line chart styling
  const options = {
    data: rangedDailyData.map(({ cost }) => cost),
    label: "Cost (£)",
    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
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

  // Color setting for Radio buttons
  const OrangeRadio = withStyles({
    root: {
      color: "#333",
      "&$checked": {
        color: "#f78c2a",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  // Radio button change handler
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Line chart data setting
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
      <Paper className={styles.timeframe} elevation={3}>
        <h2 className={styles.header}>Budget Spending & Daily Data</h2>
        <FormControl component="fieldset">
          <RadioGroup
            defaultValue="30"
            className={styles.boxes}
            row
            name="dateRange"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <FormControlLabel
              value="30"
              control={
                <OrangeRadio
                  checked={selectedValue === "30"}
                  onChange={handleChange}
                  value="30"
                  inputProps={{ "aria-label": "30" }}
                />
              }
              label="Last 30 days"
            />
            <FormControlLabel
              value="21"
              control={
                <OrangeRadio
                  checked={selectedValue === "21"}
                  onChange={handleChange}
                  value="21"
                  inputProps={{ "aria-label": "21" }}
                />
              }
              label="Last 21 days"
            />
            <FormControlLabel
              value="14"
              control={
                <OrangeRadio
                  checked={selectedValue === "14"}
                  onChange={handleChange}
                  value="14"
                  inputProps={{ "aria-label": "14" }}
                />
              }
              label="Last 14 days"
            />
            <FormControlLabel
              value="7"
              control={
                <OrangeRadio
                  checked={selectedValue === "7"}
                  onChange={handleChange}
                  value="7"
                  inputProps={{ "aria-label": "7" }}
                />
              }
              label="Last 7 days"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Paper className={styles.container}>{lineChart}</Paper>
    </>
  );
};

export default Chart;
