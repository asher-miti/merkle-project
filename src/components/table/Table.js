import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table as SimpleTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(clicks, conversions, cost, impressions, date) {
  return { impressions, clicks, conversions, cost, date };
}

const Table = ({ data }) => {
  const classes = useStyles();

  if (!data) {
    return null;
  }

  const rows = data.map(({ clicks, conversions, cost, impressions, date }) => {
    return createData(clicks, conversions, cost, impressions, date);
  });

  return (
    <TableContainer component={Paper}>
      <SimpleTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Impressions</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Conversions</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(rows)}
          {rows.map((row) => (
            <TableRow key={row.impressions}>
              <TableCell component="th" scope="row">
                {row.impressions}
              </TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.conversions}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{new Date(row.date).toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </SimpleTable>
    </TableContainer>
  );
};

export default Table;
