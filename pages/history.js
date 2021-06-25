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

export default function History() {
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
  return <Layout>

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
  </Layout>;
}
