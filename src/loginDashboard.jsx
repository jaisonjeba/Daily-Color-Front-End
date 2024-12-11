import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const LoginDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="login-dashboard-container">
      <Typography id="login-dashboard-websitename" variant="h4" component="div">
        Daily<span>Color</span>
        <small>.in</small>
      </Typography>
      <div className="login-dashboard-nav-items">
        <h3 onClick={() => navigate("/about")}>About Us</h3>
        <h3 onClick={() => navigate("/signup")}>Sign Up</h3>
      </div>
    </div>
  );
};
