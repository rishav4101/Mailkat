import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Floating() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        zIndex: 999999,
        position: "fixed",
        bottom: "15px",
        right: "15px",
      }}
    >
      <Fab color="primary" aria-label="add">
        <a href="./mail">
          <AddIcon />
        </a>
      </Fab>
    </div>
  );
}
