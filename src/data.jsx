import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/web1.png";
import Work2 from "./assets/web5.png";
import Work3 from "./assets/web4.png";
import Work4 from "./assets/web2.png";
import Work5 from "./assets/mob1.png";
import Work6 from "./assets/web7.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Atif",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Razzaq",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Pakistan",
  },

  {
    id: 5,
    title: "For Job : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Bahawalpur",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+92 3028796500",
  },

  {
    id: 8,
    title: "Email : ",
    description: "razzaq6atif@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    // description: "https://join.skype.com/invite/yyyc2zfCXuvL",
    description: "Atif Razzaq",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Urdu",
  },
];

export const stats = [
  {
    id: 1,
    no: "03+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "99%",
    title: " Completion <br /> Rate",
  },

  {
    id: 4,
    no: "9/10",
    title: "Average <br /> Rating",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "11/2023 - PRESENT",
    title: "Software Engineer <span> All Zone Technologies </span>",
    desc: "Skills: React JS, Next JS, Next-Auth, Material UI, MongoDB, CSS, Javascript, React Query",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "04/2023 - 06/2023",
    title: "Wordpress Developer <span> Logixx Grid </span>",
    desc: "Skills: HTML, CSS, Javascript, Wordpress, Core PHP, MySQL",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "06/2019 - 09/2019",
    title: "Full Stack Intern <span> Axcel </span>",
    desc: "Skills: HTML, CSS, Javascript, Core PHP, MySQL",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - 2023",
    title: "Computer Science Degree <span> The Islamia University </span>",
    desc: "Completed my graduation with 3.48 CGPA out of 4.00 CGPA",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016 - 2018",
    title: "FSC (Pre-Medical) <span> Punjab College Bahawalpur </span>",
    desc: "Completed degree securing 954 marks out of 1100",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014 - 2016",
    title: "Matriculation <span> F.G Boys High School Bahawalpur </span>",
    desc: "Completed my matriculation obtaining 944 marks out of 1050",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "85",
  },

  {
    id: 4,
    title: "React JS",
    percentage: "85",
  },

  {
    id: 5,
    title: "Next JS",
    percentage: "80",
  },

  {
    id: 6,
    title: "Node JS",
    percentage: "65",
  },

  {
    id: 7,
    title: "Express",
    percentage: "65",
  },
  {
    id: 8,
    title: "Material UI",
    percentage: "85",
  },
  {
    id: 9,
    title: "React Query",
    percentage: "85",
  },
  {
    id: 10,
    title: "Wordpress",
    percentage: "75",
  },
  {
    id: 11,
    title: "Figma",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
