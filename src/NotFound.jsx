import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=996&t=st=1680798516~exp=1680799116~hmac=3b4e80a49d8f9e6fec05dfba278a53b6dd7ce2a47032cbf7bb19c974a1effecd" />
      <p>Oops... Page Not Found!</p>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/dailycolor")}
      >
        Back to Home
      </Button>
    </div>
  );
};
