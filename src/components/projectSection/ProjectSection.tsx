"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Promptopia",
    description:
      "A prompt sharing React Application with user Authentication using Next-Auth and MongoDB for saving user details and activity.",
    image: "../../../assets/web4.png",
    tag: ["All", "Web"],
    previewUrl: "https://promptopia-zeta-ivory.vercel.app/",
  },
  {
    id: 2,
    title: "Topic",
    description:
      "A learning platform developed using React JS with the functionality of user authentication. MongoDB used for saving user Singup and Signin.",
    image: "../../../assets/web5.png",
    tag: ["All", "Web"],
    previewUrl: "https://custom-hooks-ac50d.web.app/",
  },
  {
    id: 3,
    title: "Dashboard",
    description:
      "Designed using figma and could easily be developed using React JS, Next JS and Material UI.",
    image: "../../assets/web1.png",
    tag: ["All", "Web"],
    previewUrl: "https://dribbble.com/Atif_Raxak",
  },
  {
    id: 4,
    title: "E-commerce",
    description:
      "Frontend using React JS and Backend integration with Express using MongoDB. Admin Panel developed separately to manage products",
    image: "../../assets/web3.png",
    tag: ["All", "Web"],
    previewUrl: "https://github.com/atii007/E-Commerce",
  },
  {
    id: 5,
    title: "Gaming Dashboard",
    description: "Demonstartion of the figma skills",
    image: "../../assets/web2.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/Atif_Raxak",
  },

  {
    id: 6,
    title: "Game Store",
    description:
      "Perfect demonstartion using Figma that how a mobile game store must look like",
    image: "../../assets/mob1.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/Atif_Raxak",
  },
  {
    id: 7,
    title: "Event Management",
    description: "Design for Event Management Mobile App",
    image: "../../assets/mob2.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/Atif_Raxak",
  },
  {
    id: 8,
    title: "Grocery Store",
    description:
      "This figma designs demonstrates the perfect theme and styling of how a grocery store must look like",
    image: "../../assets/mob3.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/Atif_Raxak",
  },
  {
    id: 9,
    title: "Admin Dashboard",
    description:
      "Completely working dashboard with managing team functionality, built with Material UI having features like Light and Dark theme. Data management done using Axios library.",
    image: "../../assets/web7.png",
    tag: ["All", "Web"],
    previewUrl: "https://github.com/atii007/admin-dashboard",
  },
  {
    id: 10,
    title: "Website managing Dashboard",
    description:
      "Now managing product has become easy using this dashboard. Live states updates with website connected.",
    image: "../../assets/web8.png",
    tag: ["All", "Web"],
    previewUrl: "https://github.com/atii007/E-Commerce",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="projectTag_Button">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Figma"
          isSelected={tag === "Figma"}
        />
      </div>
      <ul ref={ref} className="projectCards_Section">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
