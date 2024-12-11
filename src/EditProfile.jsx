import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Dashboard } from "./dashboard.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../global.js";
import { checkFunction } from "./color.jsx";
import { Loading } from "./loading.jsx";
import { Button } from "@mui/material";

export const EditProfile = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API}/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => checkFunction(response))
      .then((data) => setData(data));
  }, []);
  return (
    <div className="editprofile-container">
      <Dashboard />
      {data ? <EditProfileForm data={data} /> : <Loading />}
    </div>
  );
};
const EditProfileForm = ({ data }) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(data.name);
  const handleEdit = () => {
    fetch(`${API}/editprofile/${data._id}`, {
      method: "PUT",
      body: JSON.stringify({ name: edit }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        response.json();
      })
      .then(() => navigate("/profile"));
  };

  return (
    <Card id="edit-form-container">
      <h3>Update Profile</h3>
      <TextField
        onChange={(e) => setEdit(e.target.value)}
        value={edit}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        required
      />
      <Button onClick={handleEdit} color="secondary" variant="contained">
        Update
      </Button>
    </Card>
  );
};
