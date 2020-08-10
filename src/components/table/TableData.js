import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const columns = [
  { id: "impressions", label: "Impressions", minWidth: 170 },
  { id: "clicks", label: "Clicks", minWidth: 100 },
  {
    id: "conversions",
    label: "Conversions",
    minWidth: 170,
    align: "right",
  },
  {
    id: "cost",
    label: "Cost(£)",
    minWidth: 170,
    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-GB"),
  },
];

// new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    marginTop: "3rem",
    marginBottom: "3rem",
    borderRadius: 5,
    width: "100%",
  },
});

const TableData = ({ data }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!data) {
    return null;
  }

  function createData(clicks, conversions, cost, impressions, date) {
    return { impressions, clicks, conversions, cost, date };
  }

  const rows = data.map(({ clicks, conversions, cost, impressions, date }) => {
    return createData(clicks, conversions, cost, impressions, date);
  });

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[7, 14, 21, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableData;
