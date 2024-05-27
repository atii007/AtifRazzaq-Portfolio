import React from "react";
import { personalInfo } from "@/src/data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li key={index} className="info_item">
            <span className="info_title">{title}</span>
            <span className="info_description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
