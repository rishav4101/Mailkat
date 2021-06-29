import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/mailAction";
import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTableStyles } from "../components/Styles";
import Floating from "../components/Floating";
import Link from "next/link";
import Image from "next/image";
import pic from "../public/Graphic2.svg";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useRouter } from "next/router";
import MailDrawer from "../components/mailDrawer";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchedSchedule = useSelector((state) => state.mail.schedule);
  const fetchedError = useSelector((state) => state.mail.scheduleError);
  const classes = useTableStyles();

  React.useEffect(() => {
    dispatch({ type: ACTION_TYPES.GET_SCHEDULE });
    console.log(fetchedSchedule);
  }, []);

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
    { id: "Schedule Time", label: "Schedule Time" },
    { id: "Stop Schedule", label: "Stop Schedule" },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Mailkat</title>
        <meta name="description" content="Mailkat official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
        <MailDrawer open={open} handleDrawerClose={handleDrawerClose} data={mailData}/>
          <div className="flex flex-row flex-wrap-reverse my-10">
            <div className="flex flex-col justify-center items-center text-center xl:items-start xl:text-left mx-auto max-w-xl">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl ">
                Need help with your mailings?
              </h1>
              <h2 className="text-xl lg:text-2xl my-5">
                MailKat is here to rescue you.
              </h2>
            </div>
            <div className="flex flex-row justify-center items-center mx-auto">
              <Image
                className="h-auto w-full max-w-md -mr-10"
                src={pic}
                alt="."
                width={408}
                height={268}
              />
              {/* <img
                src="./Graphic2.svg"
                alt="."
                className="h-auto w-full max-w-md -mr-10"
              /> */}
            </div>
          </div>

          <div className="w-11/12 mx-auto rounded-sm p-5 lg:p-10 flex flex-row flex-wrap justify-between items-center bg-fadedOrange rounded-xl">
            <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left mx-auto lg:mx-0">
              <h1 className="text-2xl lg:text-4xl ">
                Start now by creating a new campaign.
              </h1>
              <h2 className="text-lg lg:text-xl max-w-lg">
                Create. Schedule. Reuse.
              </h2>
            </div>
            <div className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
              <Link href="/createcampaign">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className="m-10"
                >
                  Create Campaign
                </Button>
              </Link>
            </div>
          </div>
          {/* {fetchedCountries?.map((c) => (
          <h1 key={c.name}>{c.name}</h1>
        ))} */}

          {fetchedError ? (
            <Alert severity="warning" className="max-w-lg mx-auto my-5">
              <AlertTitle>Warning</AlertTitle>
              <strong>{fetchedError}</strong>
            </Alert>
          ) : (
            <>
              <h3
                className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-centre xl:text-5xl
                  xl:text-bold"
                style={{
                  margin: "45px",
                  color: "#ff3d00",
                  fontWeight: "bold",
                }}
              >
                Scheduled
              </h3>
              {Array.isArray(fetchedSchedule) && fetchedSchedule.length > 0 ? (
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
                        {Array.isArray(fetchedSchedule) ? (
                          fetchedSchedule.map((his) => (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={his.nextMailTime}
                              
                            >
                              <TableCell
                                className={classes.TableCell}
                                align="center"
                                onClick={() => 
                                  handleDrawerOpen(his)
                                }
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
                                onClick={() => 
                                  handleDrawerOpen(his)
                                }
                              >
                                {his.subject}
                              </TableCell>
                              <TableCell
                                className={classes.TableCell}
                                align="center"
                                onClick={() => 
                                  handleDrawerOpen(his)
                                }
                              >
                                {his.recurrence}
                              </TableCell>
                              <TableCell
                                className={classes.TableCell}
                                align="center"
                                onClick={() => 
                                  handleDrawerOpen(his)
                                }
                              >
                                {his.nextMailTime}
                              </TableCell>
                              <TableCell
                                className={classes.TableCell}
                                align="center"
                              >
                                {his.task_id !== undefined ? (
                                  <Button
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    className="m-10"
                                    onClick={() => {
                                      dispatch({
                                        type: ACTION_TYPES.STOP_SCHEDULE,
                                        payload: his.task_id,
                                      });
                                      dispatch({
                                        type: ACTION_TYPES.GET_SCHEDULE,
                                      });
                                    }}
                                  >
                                    Stop
                                  </Button>
                                ) : (
                                  <>NON-RECURRENT</>
                                )}
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <></>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              ) : (
                <Alert severity="info" className="max-w-lg mx-auto my-5">
                  <AlertTitle>Info</AlertTitle>
                  <strong>No Emails Scheduled!</strong>
                </Alert>
              )}
            </>
          )}
          <Floating />
          <div className="h-20 w-full"></div>
        </Layout>
      </main>
    </div>
  );
}
