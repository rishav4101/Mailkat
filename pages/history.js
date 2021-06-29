import React from "react";
import Layout from "../components/Layout";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTableStyles } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/mailAction";
import Floating from "../components/Floating";

export default function History() {
  const dispatch = useDispatch();
  const classes = useTableStyles();

  const fetchedHistory = useSelector((state) => state.mail.history);
  React.useEffect(() => {
    console.log("here");
    dispatch({ type: ACTION_TYPES.GET_HISTORY });
    console.log(fetchedHistory);
  }, []);

  const columns = [
    { id: "To", label: "To" },
    { id: "Subject", label: "Subject" },
    { id: "Recurrance", label: "Recurrance" },
    { id: "Time", label: "Time" },
  ];
  return (
    <Layout>
      <h3
        className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-centre xl:text-5xl
          xl:text-bold"
        style={{
          color: "#ff3d00",
        }}
      >
        History
      </h3>
      <Paper className={classes.TableRoot2} style={{ width: "95%" }}>
        <TableContainer className={classes.TableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    className={classes.TableHead}
                    // style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(fetchedHistory) ? (
                fetchedHistory.map((his) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={his.lastSent}
                  >
                    <TableCell className={classes.TableCell} align="center">
                      {his.to.length > 1
                        ? his.to[0] + ", " + his.to[1].slice(0, 10) + "..."
                        : his.to[0]}
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      {his.subject}
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      {his.recurrence}
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      {his.lastSent}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <> </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Floating />
      <div className="h-20 w-full"></div>
    </Layout>
  );
}
