import React from "react";
import "../assets/leftPane.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const LeftPane = () => {
  return (
    <div className="leftPane">
      <div className="appName_div">
        <div className="commonIconName">
          {/* <img src={logo} alt="logo" /> */}
          <h2>Clam Sleep</h2>
        </div>
      </div>

      <div className="appLogout_div">
        <div className="commonIconName">
          <span className="iconsHover">
            <AccountCircleIcon />
          </span>
          <p className="iconsHover">Dashboard</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <SettingsOutlinedIcon />
          </span>
          <p className="iconsHover">Settings</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <ExitToAppOutlinedIcon />
          </span>
          <p className="iconsHover">Log Out</p>
        </div>
      </div>
    </div>
  );
};
