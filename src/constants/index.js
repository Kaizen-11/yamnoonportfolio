import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Algorithm Optimizer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Data-Driven Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "BSc in Computer Science",
      icon: mobile,
      company_name: "Arizona State University (ASU)",
      iconBg: "#383E56",
      date: "2024 - 2028",
      points: [
        "Learning to build, test, and maintain applications using modern programming languages like Java, C++, Python, and JavaScript",
        "Developing full-stack web applications with technologies like React.js, Node.js, and Express, focusing on both frontend and backend solutions.",
        "Exploring the basics of electrical circuits, signals, and systems, with a focus on integrating hardware and software solutions.",
        "Learning to use MATLAB for data analysis, simulation, and algorithm development, specifically in applications such as robotics, control systems, and signal processing.",
      ],
    },
    {
      title: "Minor in Mathematics",
      icon: creator,
      company_name: "Arizona State University (ASU)",
      iconBg: "#E6DEDD",
      date: "2024 - 2028",
      points: [
        "Developing a strong foundation in differential and integral calculus, focusing on problem-solving techniques for continuous functions.",
        "Exploring concepts such as logic, set theory, combinatorics, and graph theory, which are fundamental for algorithm design and computational theory.",
        "Studying statistical methods and probability theory to analyze and interpret data, supporting applications in AI, machine learning, and data science.",
      ],
    },
    {
      title: "International A Levels",
      icon: web,
      company_name: "Pearson Edexcel",
      iconBg: "#383E56",
      date: "2022 - 2024",
      points: [
        "Mathematics",
        "Chemistry",
        "Physics",
      ],
    },
    {
      title: "IGCSE",
      company_name: "Pearson Edexcel",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Year of completion: 2022",
      points: [
        "Mathematics",
        "Pure Mathematics",
        "Chemistry",
        "Physics",
        "Bangla",
        "English Language",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A motivated student with strong programming skills and a solid aptitude in mathematics.",
      name: "Mrs. Dilara Rowshan",
      designation: "In-charge ",
      company: " Academia",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I’ve never met a guy so passionate about design and artistry—Yamnoon truly uses flair in coding!",
      name: "Siddharta Chowdhury",
      designation: "Student ",
      company: " ASU",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "The vision of using tech to create solutions that save lives is what I really admire about him.",
      name: "Shawhardo Shopan",
      designation: "Student ",
      company: " Mastermind",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  