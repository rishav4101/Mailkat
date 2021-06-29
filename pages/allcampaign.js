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
import { ACTION_TYPES } from "../redux/actions/campaignAction";
import { useRouter } from "next/router";
import Floating from "../components/Floating";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Allcampaign() {
  const dispatch = useDispatch();
  const router = useRouter();
  const getCampaign = useSelector((state) => state.campaign.campaigns);
  const fetchedError = useSelector((state) => state.mail.campaignsError);

  React.useEffect(() => {
    dispatch({
      type: ACTION_TYPES.GET_CAMPAIGN,
    });
    console.log(getCampaign);
  }, []);

  const fetchedToken = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    if (fetchedToken === "" || !fetchedToken) router.push("/");
  });

  const classes = useTableStyles();
  const columns = [
    { id: "mname", label: "Campaign Name", minWidth: 170 },
    { id: "mdate", label: "Emails", minWidth: 170 },
  ];

  return (
    <Layout>
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
            All Campaigns
          </h3>
          {Array.isArray(getCampaign) && getCampaign.length > 0 ? (
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
                          style={{ width: "50%", fontWeight: "bold" }}
                          // style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.isArray(getCampaign) ? (
                      getCampaign.map((cam) => (
                        <>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell
                              className={classes.TableCell}
                              style={{ width: "50%", fontWeight: "bold" }}
                              align="center"
                            >
                              {cam.campaignName}
                            </TableCell>
                            <TableCell
                              className={classes.TableCell}
                              style={{ width: "50%", fontWeight: "bold" }}
                              align="center"
                            >
                              {cam.to.length > 1
                                ? cam.to[0] +
                                  ", " +
                                  cam.to[1].slice(0, 10) +
                                  "..."
                                : cam.to[0]}
                            </TableCell>
                          </TableRow>
                        </>
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
              <strong>No Campaigns Created!</strong>
            </Alert>
          )}
        </>
      )}
      <Floating />
      <div className="h-20 w-full"></div>
    </Layout>
  );
}
