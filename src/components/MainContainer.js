import React from "react";
import "../assets/mainContainer.css";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

export const MainContainer = () => {
  return (
    <div className="mainContainer">
      <LeftPane />
      <RightPane />
    </div>
  );
};
