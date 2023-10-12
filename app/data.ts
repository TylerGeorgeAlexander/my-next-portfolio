// https://github.com/Ileriayo/markdown-badges
const TensorFlow = `badges/tensorflowjs.svg`;
const NextJS = `badges/nextjs.svg`;
const TailwindCSS = `badges/tailwindcss.svg`;
const MongoDB = `badges/mongodb.svg`;
const Express = `badges/express.svg`;
const ReactSVG = `badges/react.svg`;
const NodeSVG = `badges/nodejs.svg`;
const Html5SVG = `badges/html5.svg`;
const CSS3SVG = `badges/css3.svg`;
const JSSVG = `badges/javascript.svg`;

export const work = [
  {
    title: "ImageSense",
    subtitle: "Next.js, TensorFlow.js, and TailwindCSS",
    badges: [TensorFlow, NextJS, TailwindCSS],
    description:
      "ImageSense is a web application that allows you to perform image classification using the TensorFlow.js library. The application is built with Next.js and provides an intuitive user interface for uploading and classifying images.",
    image: "/image-sense.png",
    link: "https://image-sense.herokuapp.com/",
    github: "https://github.com/TylerGeorgeAlexander/ImageSense",
  },
  {
    title: "BugTracker",
    subtitle: "MongoDB, Express, React, Node",
    badges: [MongoDB, Express, ReactSVG, NodeSVG],
    description:
      "BugTracker is a full-stack web application designed to help you manage and track bugs and issues efficiently.",
    image: "/bug-tracker-1.png",
    link: "https://ta-bug-tracker-mern-client.vercel.app",
    github: "https://github.com/TylerGeorgeAlexander/ta-bug-tracker-mern",
  },
  {
    title: "Advanced Lawn Care",
    subtitle: "HTML5, CSS3",
    badges: [Html5SVG, CSS3SVG],
    description:
      "A static web page meticulously crafted for a landscaping and lawn maintenance client to ensure an impeccable online presence.",
    image: "/advanced-lawn-care.png",
    link: "https://advancedlawncare.netlify.app/",
    github: "",
  },
  {
    title: "Calvin Ester's Guitar Lessons",
    subtitle: "HTML5, CSS3",
    badges: [Html5SVG, CSS3SVG],
    description:
      "A static web page developed for Calvin Ester, a guitar instructor with expertise in music theory and history, to provide a professional online platform for his guitar lessons.",
    image: "/calvin-ester-guitar-lessons.png",
    link: "https://calvin-ester-guitar-lessons.netlify.app/",
    github: "",
  },
  {
    title: "Color Lab Salon",
    subtitle: "HTML5, CSS3",
    badges: [Html5SVG, CSS3SVG],
    description:
      "A static web page created for Color Lab Salon, a women-owned local hair salon situated in Sacramento, California, to enhance its online presence and provide essential information to potential clients.",
    image: "/color-lab-salon.png",
    link: "https://color-lab-salon.netlify.app/",
    github: "",
  },
  {
    title: "Contactr",
    subtitle: "MongoDB, Express, EJS, Node",
    badges: [MongoDB, Express, JSSVG, NodeSVG],
    description:
      "Contactr utilizes a stack composed of MongoDB, Express, EJS, and Node.js to facilitate efficient tracking of your networking connections during your job search endeavors.",
    image: "/contactr.png",
    link: "https://contactr-demo.herokuapp.com",
    github: "https://github.com/TylerGeorgeAlexander/Contactr-demo",
  },
];

export const skills = [
  "Javascript",
  "HTML5",
  "CSS3",
  "React",
  "Express",
  "Node.js",
  "MongoDB",
  "Postgres",
  "Python",
  "MS Azure",
  "GCP (Google Cloud Platform)",
  "TDD",
  "OOP",
  "TypeScript",
  "Machine Learning",
  "Git",
  "Github",
  "React Native",
  "RESTful APIs",
  "Mocha",
  "Chai",
  "Heroku",
  "Vercel",
  "Kintone",
  "Bootstrap",
  "Tailwind",
  "MySQL",
  "SQL",
  "Photoshop",
  "ES6",
];

// We are also importing a testimonials array with a
// number of objects that feature the quote, image, name, and company.
export const testimonials = [
  {
    quote:
      "“You miss 100% of the shots you don’t take – Wayne Gretzky – Michael Scott”",
    image: "michael-scott-quotes.avif",
    name: "Michael Scott",
    company: "Dunder Mifflin Paper Company",
  },
];
