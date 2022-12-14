import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import Link from "@mui/material/Link";
// import { secondaryListItems } from "./ListItems";
import Chart from "./Chart";
import Orders from "./Orders";
import index from "../assets/images/index.svg";
import { alpha, Avatar, Button, InputBase } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";
import Location from "./Location";
import Job from "./Job";
import Company from "./Company";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Apollo.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 300;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    marginTop: "32px",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
  },
}));

const NavItem = styled(Typography)({
  marginLeft: "30px",
  fontSize: "15px",
  fontWeight: "bold",
  cursor: "pointer",
});

const BottomNavItem = styled(Typography)(({ theme }) => ({
  marginRight: "30px",
  // color: "black" + "00",
  color: alpha(theme.palette.common.black, 0.5),
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
}));

const SearchDiv = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginLeft: 8,
  height: "35px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const mdTheme = createTheme();

function DashboardContent({ pData }) {
  const open = true;
  // React.useEffect(() => {}, [props.data]);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            variant="dense"
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={index}
              alt="logo"
              onClick={() => navigate("/")}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex" }}>
                <NavItem onClick={() => navigate("/")}>
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <HomeOutlinedIcon sx={{ height: 25 }} />
                  </IconButton>
                  Home
                </NavItem>
                <NavItem
                  sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    color: "primary.main",
                  }}
                >
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <SearchIcon sx={{ height: 25, color: "primary.main" }} />
                  </IconButton>
                  Search
                </NavItem>
                <NavItem>
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <SendOutlinedIcon sx={{ height: 25 }} />
                  </IconButton>
                  Engage
                </NavItem>
                <NavItem>
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <AutorenewOutlinedIcon sx={{ height: 25 }} />
                  </IconButton>
                  Enrich
                </NavItem>
              </Box>
            </Box>
            <Button
              style={{ textTransform: "none", backgroundColor: "#1991EB" }}
              variant="contained"
              sx={{
                width: "auto",
                height: "auto",
                minHeight: "32px",
                backgroundColor: "primary.main",
                borderRadius: 4,
                padding: "0px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              Get Unlimited Leads
            </Button>
            <IconButton>
              <NotificationsNoneOutlinedIcon sx={{ height: 25 }} />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon sx={{ height: 25 }} />
            </IconButton>
            <Avatar
              sx={{ ml: "15px", height: "30px", width: "30px" }}
              alt="Remy Sharp"
              src=""
            />
          </Toolbar>
          <Divider />

          <Toolbar
            variant="dense"
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex" }}>
                <BottomNavItem
                  sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    color: "primary.main",
                  }}
                >
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <PeopleAltOutlinedIcon
                      sx={{ height: 22, color: "primary.main" }}
                    />
                  </IconButton>
                  People
                </BottomNavItem>
                <BottomNavItem>
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <ApartmentOutlinedIcon sx={{ height: 22 }} />
                  </IconButton>
                  Companies
                </BottomNavItem>
                <BottomNavItem>
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <ListAltOutlinedIcon sx={{ height: 22 }} />
                  </IconButton>
                  Lists
                </BottomNavItem>
                <BottomNavItem>
                  <IconButton sx={{ height: 5, width: 34 }}>
                    <SavedSearchOutlinedIcon sx={{ height: 22 }} />
                  </IconButton>
                  Saved Searches
                </BottomNavItem>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          ></Toolbar>
          <Divider />
          <List component="nav">
            <SearchDiv>
              <SearchIconWrapper>
                <ListItemIcon sx={{ paddingBottom: 0 }}>
                  <SearchIcon />
                </ListItemIcon>
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchDiv>
            <Divider sx={{ my: 1 }} />

            <Location />
            <Divider sx={{ my: 1 }} />

            <Job />
            <Divider sx={{ my: 1 }} />
            <Company />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 6, mb: 3 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "auto",
                    // height: 80,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders pData={pData} />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard({ pData }) {
  return <DashboardContent pData={pData} />;
}
