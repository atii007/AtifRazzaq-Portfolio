import React, { ReactNode } from "react";
import parse from "html-react-parser";

type ResumeContentProps = {
  icon: ReactNode;
  year: string;
  title: string;
  desc: string;
};

const ResumeItem = ({ icon, year, title, desc }: ResumeContentProps) => {
  return (
    <div className="resume_item">
      <div className="resume_icon">{icon}</div>

      <div className="resume_date">{year}</div>

      <h3 className="resume_subtitle">{parse(title)}</h3>
      <p className="resume_description">{desc}</p>
    </div>
  );
};

export default ResumeItem;
