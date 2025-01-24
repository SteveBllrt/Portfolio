import dark_mode from "./dark-mode.png";
import profile from "./profile.jpg";
import logo from "./logo.png";
import arrow_up from "./arrow-up.png";
import header_bg from "./header-bg.png";
import menu from "./menu.png";
import close from "./close.png";
import hand from "./hand.png";
import download from "./download.png";
import right_arrow_up from "./right-arrow.png";
import code_icon from "./code-icon.png";
import edu_icon from "./edu-icon.png";
import project_icon from "./project-icon.png";
import git from "./git.png";
import vs_code from "./vs-code.png";
import figma from "./figma.png";
import send_icon from "./send-icon.png";

export const assets = {
  dark_mode,
  profile,
  logo,
  arrow_up,
  header_bg,
  menu,
  close,
  hand,
  download,
  right_arrow_up,
  code_icon,
  edu_icon,
  project_icon,
  git,
  vs_code,
  figma,
  send_icon,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work_1.png",
  },
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work_2.png",
  },
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work_3.png",
  },
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work_4.png",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon,
    title: "Languages",
    description: "Typescript, React Js, Next Js, React Native",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon,
    title: "Education",
    description: "BS Software Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [assets.vs_code, assets.figma, assets.git];
