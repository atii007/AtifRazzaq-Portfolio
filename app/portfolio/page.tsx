"use client";
import React from "react";
import "./page.css";
import ProjectSection from "@/src/components/projectSection/ProjectSection";

const Portfolio = () => {
  return (
    <section className="portfolio section container">
      <h2 className="section_title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio_container container grid">
        <ProjectSection />
      </div>
    </section>
  );
};

export default Portfolio;
