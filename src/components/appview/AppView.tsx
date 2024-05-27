import Image from "next/image";
import React from "react";
import Profile from "../../assets/atif.png";
import { FaArrowRight } from "react-icons/fa";
import "./appview.css";
import Link from "next/link";

const AppView = () => {
  return (
    <section className="home grid section">
      <Image src={Profile} alt="profile" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I am Atif Razzaq</span> Web Developer
          </h1>

          <p className="home_description">
            Web Developer with a passion for creating interactive and responsive
            web applications. I have experience working with JavaScript, React,
            Next, Node.js, Express, HTML, CSS, and Figma. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>

          <Link href="/about" className="button">
            More About Me{" "}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  );
};

export default AppView;
