import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, BarChart, Business,Drafts, Help } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ThinkBig Drives - Live Young, Live Free.</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <BarChart />
          </div>
          <div className="topbarIconContainer">
            <Business />
          </div>
          <div className="topbarIconContainer">
            <Drafts />
          </div>
          <div className="topbarIconContainer">
            <Help />
          </div>
          <img src="https://pbs.twimg.com/profile_images/1422783014510096385/AllmR7nC_400x400.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}