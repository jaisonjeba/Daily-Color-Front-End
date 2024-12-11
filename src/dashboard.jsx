import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import InfoIcon from "@mui/icons-material/Info";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

export function Dashboard() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem("token");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <AppBar s color="secondary" position="static">
        <Toolbar>
          <Typography
            id="website-name"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/dailycolor")}
          >
            Daily<span>Color</span>
            <small>.in</small>
          </Typography>
          <div className="nav-items">
            <h3
              onClick={() => navigate("/morecolors")}
              className="nav-more-colors"
            >
              More colors
            </h3>
            <h3 onClick={() => navigate("/about")} className="nav-more-colors">
              About Us
            </h3>
            <IconButton onClick={() => navigate("/profile")}>
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
            </IconButton>
            <Tooltip title="Log out">
              <IconButton
                sx={{ marginRight: "20px", color: "white" }}
                onClick={logOut}
              >
                <PowerSettingsNewIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <IconButton aria-label="menu" sx={{ color: "White" }}>
              <MenuIcon />
            </IconButton>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{ margin: "0px" }}
          >
            <MenuItem onClick={() => navigate("/profile")}>
              <IconButton>
                <AccountCircleIcon color="secondary" />
              </IconButton>
              Profile
            </MenuItem>
            <MenuItem onClick={() => navigate("/morecolors")}>
              <IconButton>
                <ColorLensIcon color="white" />
              </IconButton>
              More colors
            </MenuItem>
            <MenuItem onClick={() => navigate("/about")}>
              <IconButton>
                <InfoIcon sx={{ color: "green" }} />
              </IconButton>
              About Us
            </MenuItem>
            {token ? (
              <MenuItem onClick={logOut}>
                <IconButton>
                  <LogoutIcon color="error" />
                </IconButton>
                Logout
              </MenuItem>
            ) : (
              <MenuItem onClick={() => navigate("/")}>
                <IconButton>
                  <LoginIcon color="success" />
                </IconButton>
                Login
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
