import React, { useState } from "react";
import "../assets/styles/posts.css";
import ShareIcon from "@mui/icons-material/Share";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import BiotechIcon from "@mui/icons-material/Biotech";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkIcon from "@mui/icons-material/Work";
import VisibilityIcon from "@mui/icons-material/Visibility";
import article from "../assets/img/article.svg";
import educcation from "../assets/img/education.svg";
import meetup from "../assets/img/meetup.svg";
import sarthak from "../assets/img/sarthak.svg";
import sarah from "../assets/img/sarah.svg";
import ronal from "../assets/img/ronal.svg";
import joseph from "../assets/img/joseph.svg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Posts = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleSubMenu1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleSubMenu2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleSubMenu3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleSubMenu4 = () => {
    setIsOpen4(!isOpen4);
  };

  const data = [
    {
      icon: <HistoryEduIcon />,
      tag: "Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      author: "Sarthak Kamra",
      views: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <VisibilityIcon /> 1.4k views
        </span>
      ),
      img: <img style={{ width: "100%" }} src={article} />,
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      dp: <img className="dp" src={sarthak} />,
      menu: (
        <>
          <button className="menu-button" onClick={toggleSubMenu1}>
            <span className="menu-icon">
              <MoreHorizIcon />
            </span>
          </button>
          {isOpen1 && (
            <div className="submenu">
              <ul>
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
        </>
      ),
    },
    {
      icon: <BiotechIcon />,
      tag: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      author: "Sarah West",
      views: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <VisibilityIcon /> 1.4k views
        </span>
      ),
      img: <img style={{ width: "100%" }} src={educcation} />,
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      dp: <img className="dp" src={sarah} />,
      menu: (
        <>
          <button className="menu-button" onClick={toggleSubMenu2}>
            <span className="menu-icon">
              <MoreHorizIcon />
            </span>
          </button>
          {isOpen2 && (
            <div className="submenu">
              <ul>
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
        </>
      ),
    },
    {
      icon: <CalendarTodayIcon />,
      tag: "Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      author: "Ronal Jones",
      views: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <VisibilityIcon /> 1.4k views
        </span>
      ),
      img: <img style={{ width: "100%" }} src={meetup} />,
      dp: <img className="dp" src={ronal} />,
      line: (
        <div className="line">
          <span className="line-line">
            <CalendarTodayIcon />
            Fri, 12 Oct, 2018
          </span>
          <span className="line-line">
            <FmdGoodIcon />
            Ahmedabad, India
          </span>
        </div>
      ),
      button: (
        <button style={{ color: "#E56135" }} className="apply-btn">
          Visit Website
        </button>
      ),
      menu: (
        <>
          <button className="menu-button" onClick={toggleSubMenu3}>
            <span className="menu-icon">
              <MoreHorizIcon />
            </span>
          </button>
          {isOpen3 && (
            <div className="submenu">
              <ul>
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
        </>
      ),
    },
    {
      icon: <WorkIcon />,
      tag: "Job",
      title: "Software Developer",
      author: "Joseph Gray",
      views: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <VisibilityIcon /> 1.4k views
        </span>
      ),
      dp: <img className="dp" src={joseph} />,
      line: <div className="line"></div>,
      button: (
        <button style={{ color: "#02B875" }} className="apply-btn">
          Apply on Timesjobs
        </button>
      ),
      line: (
        <div className="line">
          <span className="line-line">
            <WorkIcon />
            Innovaccer Analytics Private Ltd.
          </span>
          <span className="line-line">
            <FmdGoodIcon />
            Noida, India
          </span>
        </div>
      ),
      menu: (
        <>
          <button className="menu-button" onClick={toggleSubMenu4}>
            <span className="menu-icon">
              <MoreHorizIcon />
            </span>
          </button>
          {isOpen4 && (
            <div className="submenu">
              <ul>
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
        </>
      ),
    },
  ];

  const [isEditing, setIsEditing] = useState(true);
  const [text, setText] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="posts">
      <div className="post">
        {data.map((index) => {
          return (
            <div className="post-card">
              <div style={{ width: "100%" }}>{index?.img}</div>
              <div className="content">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {index.icon}
                  <span className="tag">{index.tag}</span>
                </div>
                <span className="title">
                  {index.title}
                  {index?.menu}
                </span>
                <span className="desc">{index?.desc}</span>
                {index?.line}
                {index?.button}
                <div className="last-row">
                  <span className="author">
                    {index.dp}
                    {index.author}
                  </span>
                  <span className="views">
                    {index.views}
                    <span className="share">
                      <ShareIcon />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar">
        <span className="location">
          <FmdGoodIcon />
          {isEditing ? (
            <input
              type="text"
              placeholder="Enter your location"
              value={text}
              onChange={handleInputChange}
            />
          ) : (
            <span className="input">{text}</span>
          )}
          {isEditing ? (
            <SaveAsIcon
              style={{ cursor: "pointer" }}
              onClick={handleSaveClick}
            />
          ) : (
            <EditIcon style={{ cursor: "pointer" }} onClick={handleEditClick} />
          )}
        </span>
        <span className="info">
          <InfoOutlinedIcon />
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>
    </div>
  );
};

export default Posts;
