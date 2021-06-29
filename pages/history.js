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
import { Alert, AlertTitle } from "@material-ui/lab";
import { useRouter } from "next/router";
import MailDrawer from "../components/mailDrawer";

export default function History() {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useTableStyles();

  const fetchedToken = useSelector((state) => state.auth.token);

  const fetchedHistory = useSelector((state) => state.mail.history);
  const fetchedError = useSelector((state) => state.mail.historyError);

  React.useEffect(() => {
    console.log("here");
    dispatch({ type: ACTION_TYPES.GET_HISTORY });
    console.log(fetchedHistory);
  }, []);

  React.useEffect(() => {
    if (fetchedToken === "" || !fetchedToken) router.push("/");
  });

  const [open, setOpen] = React.useState(false);
  const [mailData, setMailData] = React.useState({});
  const handleDrawerOpen = (dat) => {
    setMailData(dat)
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const columns = [
    { id: "To", label: "To" },
    { id: "Subject", label: "Subject" },
    { id: "Recurrance", label: "Recurrance" },
    { id: "Time", label: "Time" },
  ];
  return (
    <Layout>
      <MailDrawer open={open} handleDrawerClose={handleDrawerClose} data={mailData}/>
      {fetchedError ? (
        <Alert severity="error" className="max-w-lg mx-auto my-5">
          <AlertTitle>Error</AlertTitle>
          <strong>{fetchedError}</strong>
        </Alert>
      ) : (
        <>
          <h3
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-centre xl:text-5xl
          xl:text-bold"
            style={{
              margin: "15px",
              color: "#ff3d00",
            }}
          >
            {" "}
            History
          </h3>
          {Array.isArray(fetchedHistory) && fetchedHistory.length > 0 ? (
            <Paper className={classes.TableRoot2}>
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
                          onClick={() => 
                            handleDrawerOpen(his)
                          }
                        >
                          <TableCell
                            className={classes.TableCell}
                            align="center"
                          >
                            {his.to.length > 1
                              ? his.to[0] +
                                ", " +
                                his.to[1].slice(0, 10) +
                                "..."
                              : his.to[0]}
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            align="center"
                          >
                            {his.subject}
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            align="center"
                          >
                            {his.recurrence ? his.recurrence : "Non-recurrent"}
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            align="center"
                          >
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
          ) : (
            <Alert severity="info" className="max-w-lg mx-auto my-5">
              <AlertTitle>Info</AlertTitle>
              <strong>No history yet!</strong>
            </Alert>
          )}
        </>
      )}
      <Floating />
      <div className="h-20 w-full"></div>
    </Layout>
  );
}
