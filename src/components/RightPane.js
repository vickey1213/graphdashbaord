import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "../assets/rightPane.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from "@mui/material/Avatar";
import profilePic from "../assets/profilePic.jpg";
import logo from "../assets/camera.jpeg";
import whatImage from "../assets/what.avif";

const Dashboard = ({ items, logoImage, whatImage }) => {
  useEffect(() => {
    const createChart = (canvas, completionRate) => {
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Completion Rate"],
          datasets: [
            {
              label: "Completion Rate",
              data: [completionRate],
              backgroundColor: "#3f51b5",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 10,
              },
            },
          },
        },
      });
    };

    items.forEach((item, index) => {
      const canvas = document.getElementById(`chart-${index}`);
      if (canvas) {
        createChart(canvas, item.completion_rate);
      }
    });
  }, [items]);

  return (
    <div className="dashboard">
      {items.map((item, index) => (
        <div key={index} className="dashboard-item">
          <img
            src={index === 0 ? logoImage : whatImage}
            alt="Thumbnail"
            className="thumbnail"
          />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Unique Plays: {item.unique_plays}</p>
            <p>Total Plays: {item.total_plays}</p>
            <div className="graph">
              <canvas id={`chart-${index}`} width="200" height="100"></canvas>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${item.completion_rate}%`,
                  background: `linear-gradient(to right, #3f51b5 ${item.completion_rate}%, transparent 0)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const RightPane = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const tempData = [
          {
            image: "image1.jpg",
            title: "Item 1",
            unique_plays: 10,
            total_plays: 20,
            completion_rate: 50,
          },
          {
            image: "image2.jpg",
            title: "Item 2",
            unique_plays: 5,
            total_plays: 15,
            completion_rate: 70,
          },
        ];
        setItems(tempData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="rightPane">
      <div className="header">
        <div className="searchDiv">
          <SearchOutlinedIcon className="iconsHover" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
        <div className="settingsDiv">
          <SettingsOutlinedIcon className="iconsHover" />
          <ChatBubbleOutlineOutlinedIcon className="iconsHover" />
          <NotificationsNoneOutlinedIcon className="iconsHover" />
          <Avatar alt="Profile" src={profilePic} className="profilePic" />
          <ExpandMoreOutlinedIcon className="iconsHover" />
        </div>
      </div>
      <div className="content">
        <Dashboard items={items} logoImage={logo} whatImage={whatImage} />
      </div>
    </div>
  );
};
