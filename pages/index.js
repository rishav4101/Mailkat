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

export default function Home() {
  const dispatch = useDispatch();
  const fetchedSchedule = useSelector((state) => state.mail.schedule);
  const classes = useTableStyles();

  // React.useEffect(() => {
  //   dispatch({type:ACTION_TYPES.GET_SCHEDULE})
  //   console.log(fetchedSchedule)
  // }, []);

  const columns = [
    { id: "id", label: "Universal ID", minWidth: 170 },
    { id: "mname", label: "Manfacturer", minWidth: 170 },
    { id: "mdate", label: "Date", minWidth: 170 },
    { id: "pname", label: "Product Name", minWidth: 170 },
    { id: "price", label: "Price", minWidth: 170 },
    { id: "owner", label: "Owner", minWidth: 170 },
    { id: "lastAction", label: "Last Action", minWidth: 170 },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Mailkat</title>
        <meta name="description" content="Mailkat official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/codemirror@5.49.0/lib/codemirror.min.css"
        ></link>
      </Head>

      <main>
        <Layout>
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
              <img
                src="./Graphic2.svg"
                alt="."
                className="h-auto w-full max-w-md -mr-10"
              />
            </div>
          </div>

          <div className="w-full rounded-sm p-5 lg:p-10 flex flex-row flex-wrap justify-between items-center bg-fadedOrange rounded-xl">
            <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left mx-auto lg:mx-0">
              <h1 className="text-2xl lg:text-4xl ">
                Start now by creating a new campaign.
              </h1>
              <h2 className="text-lg lg:text-xl ">
                You can create a campaign to send mails to mutiple audience, schedule it recurrence or for once and reuse the campaign audience. 
              </h2>
            </div>
            <div className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
              <Button
                variant="contained"
                size="large"
                color="primary"
                className="m-10"
              >
                Create Email
              </Button>
            </div>
          </div>
          {/* {fetchedCountries?.map((c) => (
          <h1 key={c.name}>{c.name}</h1>
        ))} */}

          <Paper className={classes.TableRoot2}>
            <TableContainer className={classes.TableContainer}>
              <Table stickyHeader aria-label="sticky table">
                {/* <TableHead>
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
                </TableHead> */}
                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                    <TableCell className={classes.TableCell} align="center">
                      first
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Floating />
        </Layout>
      </main>
    </div>
  );
}
