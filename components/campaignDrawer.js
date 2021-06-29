import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { useMailDrawerStyles } from "./Styles";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import MultiEmail from "../components/MultiEmail";

export default function CampaignDrawer(props) {
  const classes = useMailDrawerStyles();
  const theme = useTheme();

//   //ONSEND HANDLER
//   const onsend = async () => {
//     const data = {
//       to: props.data.to,
//       cc: props.data.cc,
//       bcc: props.data.bcc,
//       campaignName: props.data.campaignName,
//     };

//     console.log(data);
//     // dispatch({ type: ACTION_TYPES.CREATE_CAMPAIGN, payload: data });

//     () => props.handleDrawerClose;
//   };

  return (
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
            <b className="text-xl ml-5 text-primary">
              {props.data.campaignName}
            </b>
          </ListItemText>
        </div>
        {props.edit ? (
          <>
           <div className="mx-5 text-left">
            <div className="my-5">
              <MultiEmail
                required
                email={props.data.to}
                handler={props.changeToEmails}
                placeholder="To"
              />
              <br />
              <MultiEmail
                email={props.data.cc}
                handler={props.changeCcEmails}
                placeholder="Cc"
              />
              <br />
              <MultiEmail
                email={props.data.bcc}
                handler={props.changeBccEmails}
                placeholder="Bcc"
              />
            </div>

            <Button
              variant="contained"
              size="large"
              color="primary"
              className="m-10"
              onClick={props.handleOnSend}
            >
              Save
            </Button>
            </div>
          </>
        ) : (
          <div className="w-full mx-5 text-left">
            <Button
              startIcon={<EditIcon />}
              variant="outlined"
              size="large"
              color="primary"
              className="m-4"
              onClick={props.handleEdit}
            >
              Edit this campaign
            </Button>
            <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
            <div className="flex flex-row">
              <h1 className="text-lg font-semibold text-primary w-2/12 sm:w-1/12">
                To :{" "}
              </h1>
              <div className="p-1 text-md w-10/12 sm:w-11/12">
                {props.data.to && props.data.to.map((cm) => cm + ", ")}
              </div>
            </div>
            <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
            {props.data.cc && props.data.cc.length>0 ? (
              <>
                <div className="flex flex-row">
                  <h1 className="text-lg font-semibold text-primary w-2/12 sm:w-1/12">
                    Cc :{" "}
                  </h1>
                  <div className="p-1 text-md w-10/12 sm:w-11/12">
                    {props.data.cc && props.data.cc.map((cm) => cm + ", ")}
                  </div>
                </div>
                <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
              </>
            ) : (
              <></>
            )}
            {props.data.bcc && props.data.bcc.length>0 ? (
              <>
                <div className="flex flex-row">
                  <h1 className="text-lg font-semibold text-primary w-2/12 sm:w-1/12">
                    Bcc :{" "}
                  </h1>
                  <div className="p-1 text-md w-10/12 sm:w-11/12">
                    {props.data.bcc && props.data.bcc.map((cm) => cm + ", ")}
                  </div>
                </div>{" "}
                <div className="h-px w-4/5 my-2 bg-fadedOrange"></div>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </Drawer>
    </div>
  );
}
