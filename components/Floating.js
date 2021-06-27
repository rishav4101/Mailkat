import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
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
    <div className={classes.root} style={{position:"fixed", bottom:"40px", right:"40px"}}>
      <Fab color="primary" aria-label="add">
        <a href="./mail"><AddIcon /> </a>
      </Fab>
    </div>
  );
}