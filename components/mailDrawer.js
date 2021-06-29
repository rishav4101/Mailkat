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

    const date = new Date(props.data.lastSent);

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

        <div className="w-full mx-5 text-left">
          <div className="text-md">{date.toString()}</div>
        <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
        <div className="flex flex-row">
            <h1 className="text-lg font-semibold text-primary w-4/12 sm:w-3/12">Recurrence : </h1> 
            <div className="p-1 text-md w-8/12 sm:w-9/12">{props.data.recurrence ? props.data.recurrence : "Non-recurrent"}</div>
            </div>
            <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
            <div className="flex flex-row">
            <h1 className="text-lg font-semibold text-primary w-2/12 sm:w-1/12">To : </h1> 
            <div className="p-1 text-md w-10/12 sm:w-11/12">{props.data.to && props.data.to.map((cm) => cm + ", ")}</div>
            </div>
            <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
            {props.data.cc && props.data.cc.length>0 ? <>
            <div className="flex flex-row">
            <h1 className="text-lg font-semibold text-primary w-2/12 sm:w-1/12">Cc : </h1> 
            <div className="p-1 text-md w-10/12 sm:w-11/12">{props.data.cc && props.data.cc.map((cm) => cm + ", ")}</div>
            </div>
            <div className="h-px w-4/5 my-2 bg-fadedOrange"></div></> : <></>}
            {props.data.bcc && props.data.bcc.length>0 ? <>
            <div className="flex flex-row">
            <h1 className="text-lg font-semibold text-primary w-2/12 sm:w-1/12">Bcc : </h1> 
            <div className="p-1 text-md w-10/12 sm:w-11/12">{props.data.bcc && props.data.bcc.map((cm) => cm + ", ")}</div>
            </div> <div className="h-px w-4/5 my-2 bg-fadedOrange"></div></> : <></>}

            <h1 className="text-lg font-semibold text-primary">Body : </h1>
            <div className=" w-10/12" dangerouslySetInnerHTML={{ __html: props.data.body }}></div>
            <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
        </div>
      </Drawer>
      </div>
    )
}