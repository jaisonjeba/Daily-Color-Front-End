import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Dashboard } from "./dashboard.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API } from "../global.js";
import { Loading } from "./loading.jsx";
import { checkFunction } from "./color.jsx";

export const ColorPalette = () => {
  const [color, setColor] = useState(null);

  const addLike = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    });
  };

  useEffect(() => {
    getColors();
  }, []);

  const getColors = () => {
    fetch(`${API}/colors`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => checkFunction(response))
      .then((data) => setColor(data));
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${API}/search/color/${key}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      result = await result.json();
      setColor(result);
    } else {
      getColors();
    }
  };
  return (
    <div>
      <Dashboard />
      <div className="input-box-container">
        <input
          className="input-box"
          placeholder="search color"
          onChange={searchHandle}
        />
      </div>
      {color ? (
        <div className="color-list">
          {color.length > 0 ? (
            color.map((colors) => (
              <Colors key={colors._id} colors={colors} addLike={addLike} />
            ))
          ) : (
            <h1>No Matches Found</h1>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const Colors = ({ colors, addLike }) => {
  const [like, setLike] = useState(0);

  return (
    <Card id="main-color-palette">
      <div
        className="daily-color-palette"
        style={{ backgroundColor: `${colors.hex}` }}
      ></div>
      <div className="color-title-div">
        <p style={{ textAlign: "center" }}>{colors.name}</p>
        <span>
          <FavoriteIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              addLike(colors._id);
              setLike(1);
            }}
            color={like === 1 ? "error" : "grey"}
          />
          ({colors.count})
        </span>
      </div>
    </Card>
  );
};
