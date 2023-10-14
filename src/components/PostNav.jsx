import React, { useState } from "react";
import "../assets/styles/postnav.css";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PostNav = () => {
  const [group, setGroup] = useState(false);
  return (
    <div className="postnav">
      <div className="nav-items">
        <span className="active">All Posts (32)</span>
        <span className="inactive">Article</span>
        <span className="inactive">Event</span>
        <span className="inactive">Education</span>
        <span className="inactive">Job</span>
      </div>
      <div className="postnav-side">
        <div className="write-post">
          Write a post <ArrowDropDownIcon />
        </div>
        <div
          className={group ? "group-button leave" : "group-button join"}
          onClick={() => setGroup(!group)}
        >
          {group ? (
            <span className="button-content">
              <ExitToAppIcon />
              Leave Group
            </span>
          ) : (
            <span className="button-content">
              {" "}
              <GroupIcon />
              Join Group
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostNav;
