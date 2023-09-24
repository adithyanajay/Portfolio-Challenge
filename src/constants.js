import {
  adidas_logo,
  biking_img,
  blog_img,
  cooking_img,
  gaming_img,
  hm_logo,
  nasa,
  prj_1,
  prj_2,
  prj_3,
} from "./assets";

export const skills = [
  {
    skill: "React",
    percent: 4,
  },
  {
    skill: "Javascript",
    percent: 5,
  },
  {
    skill: "CSS",
    percent: 4,
  },
  {
    skill: "Vue",
    percent: 3,
  },
  {
    skill: "React",
    percent: 4,
  },
  {
    skill: "Redux",
    percent: 5,
  },
  {
    skill: "React Native",
    percent: 2,
  },
];

export const hobbies = [
  {
    name: "Gaming",
    content: "Quisque feugiat malesuada molestie.",
    img: gaming_img,
  },
  {
    name: "Cooking",
    content: "Quisque feugiat malesuada molestie.",
    img: cooking_img,
  },
  {
    name: "Biking",
    content: "Quisque feugiat malesuada molestie.",
    img: biking_img,
  },
];

export const blogs = [
  {
    name: "How to organize your CSS",
    img: blog_img,
    text_1:
      "In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. ",
    text_2:
      " Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
];

export const experiences = [
  {
    img: adidas_logo,
    date: "Feb 2017 - Current",
    position: "Front-end developer",
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },

  {
    img: hm_logo,
    date: "Aug 2016 - Feb 2018",
    position: "Full-stack developer",
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
  {
    img: nasa,
    date: "Jun 2015 - Aug 2016",
    position: "Junior front-end developer",
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  },
];

export const project_nav = [
  {
    name: "React",
    flag: 1,
  },
  {
    name: "Vue",
    flag: 2,
  },
  {
    name: "Responsive",
    flag: 3,
  },
];

export const project = [
  {
    img: prj_1,
    tag: ["#HTML", "#Vue", "#Responsive"],
    flags: [2, 3],
    name: "Edie Homepage",
    content:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
  },

  {
    img: prj_2,
    tag: ["#HTML", "#React", "#Responsive"],
    flags: [1, 3],
    name: "Checkout Page",
    content:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
  },

  {
    img: prj_3,
    tag: ["#HTML", "#React", "#Responsive"],
    flags: [1, 3],
    name: "My Team Page",
    content:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
  },
];


