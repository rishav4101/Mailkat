import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { useMailDrawerStyles } from "./Styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useTheme } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function MailDrawer(props){
    const classes = useMailDrawerStyles();
    const theme = useTheme();
    return(
        <div className={classes.root}>
        <Drawer
        className={clsx(classes.drawer)}
        anchor="right"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
              <ChevronRightIcon style={{ color: "#dd2c00" }} />
          </IconButton>
          <ListItemText>
            <b className="text-xl ml-5 text-primary">{props.data.subject}</b>
          </ListItemText>
          
        </div>
        <div>
            <h1>{props.data.subject}</h1>
        </div>
      </Drawer>
      </div>
    )
}