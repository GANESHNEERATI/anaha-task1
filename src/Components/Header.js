import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Profilepic from "../Assets/profile.jpg";
import ErrorIcon from "@material-ui/icons/Error";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="logo">
          <h2>
            <strong>ANAHA</strong>
          </h2>
        </div>

        <div className="header_left_data">
          <p>Patient Profile</p>
          <p>
            <ArrowForwardIosIcon />
          </p>
          <p>Analytics</p>
        </div>
      </div>

      <div className="header_center">
        <div className="header_center_data">
          <p>
            <SearchIcon />
          </p>
          <input type="text" placeholder="Search" />
          <p>
            <ExpandMoreIcon />
          </p>
        </div>
      </div>
      <div className="header_right">
        <p>
          <ErrorIcon />
        </p>
        <p>
          <AppsIcon />
        </p>
        <p>
          <NotificationsIcon />
        </p>
        <Avatar src={Profilepic} />
        <p>Dr.Raquel</p>
        <p>
          <ExpandMoreIcon />
        </p>
      </div>
    </div>
  );
}

export default Header;
