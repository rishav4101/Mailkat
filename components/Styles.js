import { makeStyles } from "@material-ui/core/styles";
import { min } from "date-fns";

export const useTableStyles = makeStyles({
  TableHead: {
    backgroundColor: "#ff3d00 !important",
    color: "#fff !important",
  },
  TableCell: {
    color: "#dd2c00 !important",
  },
  TableRoot2: {
    width: "95%",
    maxWidth: 1300,
    minWidth:300,
    margin: "30px auto",
    border: "0px solid #ff3d00",
    borderRadius: 10,
    boxShadow: "0px 0px 20px #ffccbc",
  },
  TableContainer: {
    maxHeight: 600,
    borderRadius: 7,
  },
});

const drawerWidth = 240;

export const useNavbarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:"#fff",
    color:"#000",
    height:"80px",
    boxShadow:"0px 0px 20px #ffccbc",
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"#dd2c00"
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: "#000",
    borderRight: "8px solid #ff3d00",
    boxShadow:"0px 0px 20px #ffccbc",
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    minHeight:"80px !important"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


export const useMailDrawerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "min(100%, 600px)",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "min(100%, 600px)",
    color: "#000",
    borderLeft: "8px solid #ff3d00",
    // boxShadow:"0px 0px 20px #ffccbc",
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    minHeight:"80px !important"
  },
}));