import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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

// ORIGINAL

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table as SimpleTable,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@material-ui/core";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(clicks, conversions, cost, impressions, date) {
//   return { impressions, clicks, conversions, cost, date };
// }

// const Table = ({ data }) => {
//   const classes = useStyles();

//   if (!data) {
//     return null;
//   }

//   const rows = data.map(({ clicks, conversions, cost, impressions, date }) => {
//     return createData(clicks, conversions, cost, impressions, date);
//   });

//   return (
//     <TableContainer component={Paper}>
//       <SimpleTable className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Impressions</TableCell>
//             <TableCell align="right">Clicks</TableCell>
//             <TableCell align="right">Conversions</TableCell>
//             <TableCell align="right">Cost</TableCell>
//             <TableCell align="right">Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {console.log(rows)}
//           {rows.map((row) => (
//             <TableRow key={row.impressions}>
//               <TableCell component="th" scope="row">
//                 {row.impressions}
//               </TableCell>
//               <TableCell align="right">{row.clicks}</TableCell>
//               <TableCell align="right">{row.conversions}</TableCell>
//               <TableCell align="right">{row.cost}</TableCell>
//               <TableCell align="right">{new Date(row.date).toDateString()}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </SimpleTable>
//     </TableContainer>
//   );
// };

// export default Table;
