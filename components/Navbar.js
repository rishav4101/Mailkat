import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from "@material-ui/icons/History";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useNavbarStyles } from "./Styles";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/authAction";
import { useRouter } from "next/router";
import Image from "next/image";
import pic from "../public/logo2.png";

export default function PersistentDrawerLeft({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const fetchedToken = useSelector((state) => state.auth.token);
  const matches = useMediaQuery("(max-width: 920px)");
  const classes = useNavbarStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    if (matches && open) {
      setOpen(false);
    }
  }, [matches]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ height: "80px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link href="/">
              <Image src={pic} alt="." width={115.2} height={49.5} />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={clsx(classes.drawer)}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItemText>
            {/* <b className="uppercase text-xl ml-5 text-primary">Page Title</b> */}
          </ListItemText>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#dd2c00" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {/* <div className="bg-fadedOrange h-px"/> */}
        <List>
          <Link href="/">
            <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
              <HomeIcon className="m-2.5" />
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>

          {fetchedToken === "" || !fetchedToken ? (
            <>
              <Link href="/login">
                <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
                  <PowerSettingsNewIcon className="m-2.5" />
                  <ListItemText>Login</ListItemText>
                </ListItem>
              </Link>

              <Link href="/signup">
                <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
                  <AccountCircleIcon className="m-2.5" />
                  <ListItemText>Signup</ListItemText>
                </ListItem>
              </Link>
            </>
          ) : (
            <>
              <Link href="/history">
                <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
                  <HistoryIcon className="m-2.5" />
                  <ListItemText>History</ListItemText>
                </ListItem>
              </Link>

              <Link href="/mail">
                <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
                  <EditIcon className="m-2.5" />
                  <ListItemText>Mail</ListItemText>
                </ListItem>
              </Link>

              <Link href="/createcampaign">
                <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
                  <AddIcon className="m-2.5" />
                  <ListItemText>New Campaign</ListItemText>
                </ListItem>
              </Link>

              <Link href="/allcampaign">
                <ListItem className="hover:text-secondary hover:bg-fadedOrange cursor-pointer">
                  <ClearAllIcon className="m-2.5" />
                  <ListItemText>All Campaign</ListItemText>
                </ListItem>
              </Link>

              <ListItem
                onClick={() => {
                  console.log("logout init");
                  dispatch({ type: ACTION_TYPES.LOG_OUT });
                  router.push("/login");
                }}
                className="hover:text-secondary hover:bg-fadedOrange cursor-pointer"
              >
                <PowerSettingsNewIcon className="m-2.5" />
                <ListItemText>Logout</ListItemText>
              </ListItem>
            </>
          )}
        </List>

        <div
          style={{ height: "100%", display: "flex", alignItems: "flex-end" }}
        >
          <div
            style={{
              width: "100%",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 500,
              fontSize: 17,
            }}
          >
         
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rishav4101/Mailkat"
            >
              <GitHubIcon/> 
            </a>
          </div>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ margin: "0 auto", maxWidth: 1300 }}>{children}</div>
      </main>
    </div>
  );
}
