"use client";
import { skills } from "@/src/data";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <div className="progress_box" key={index}>
            <div className="progress_circle">
              <CircularProgressbar
                value={parseFloat(skill.percentage)}
                strokeWidth={7.5}
                text={`${skill.percentage}%`}
              />
            </div>

            <h3 className="skills_title">{skill.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
