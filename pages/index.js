import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ACTION_TYPES } from "../redux/actions/countriesAction";
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

export default function Home() {
  const classes = useTableStyles();

  const columns = [
    { id: "id", label: "Universal ID", minWidth: 170 },
    { id: "mname", label: "Manfacturer", minWidth: 170 },
    { id: "mdate", label: "Date", minWidth: 170 },
    { id: "pname", label: "Product Name", minWidth: 170 },
    { id: "price", label: "Price", minWidth: 170 },
    { id: "owner", label: "Owner", minWidth: 170 },
    { id: "lastAction", label: "Last Action", minWidth: 170 },
  ];

  // const dispatch = useDispatch();
  // const fetchedCountries = useSelector((state) => state.countries.countriesList);

  // React.useEffect(() => {
  //   dispatch({
  //     type: ACTION_TYPES.FETCH_COUNTRIES,
  //   });
  //   console.log(fetchedCountries);
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mailkat</title>
        <meta name="description" content="Mailkat official website" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/codemirror@5.49.0/lib/codemirror.min.css"></link>
      </Head>

      <main>
        <Layout>
          <div className="flex flex-row flex-wrap-reverse my-10">
            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left mx-auto max-w-lg">
              <h1 className="text-4xl lg:text-6xl ">
                Tired of manual mailings?
              </h1>
              <h2 className="text-xl lg:text-2xl ">
                MAILKAT is here to rescue.
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
                Start now by creating a new email.
              </h1>
              <h2 className="text-lg lg:text-xl ">
                MAILKAT is here to rescue.
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
        </Layout>
      </main>
    </div>
  );
}
