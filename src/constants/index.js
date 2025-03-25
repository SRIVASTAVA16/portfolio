import {
  mobile,
  backend,
  chatlogo,
  doclogo,
  reslogo4,
  web,
  testimonial1,
  library,
  tictactoe
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
    title: "MERN Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
  },
  {
    name: "R",
    icon: "/tech/R.png",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
  },
  {
    name: "Tableau",
    icon: "/tech/Tableau.png",
  },
   {
    name: "Hadoop",
    icon: "/tech/hadoop.png",
  },
  {
    name: "git",
    icon: "/tech/git.png",
  },
  {
    name: "MySql",
    icon: "/tech/mysql.png",
  },
  {
    name: "cpp",
    icon: "/tech/cpp.png"
  },
  {
    name: "python",
    icon: "/tech/python.png"
  },
  {
    name: "java",
    icon: "/tech/java.png"
  }
];

const experiences = [
  {
    title: "Library Management System",
    color: "pink-text-gradient",
    icon: library,
    iconBg: "#383E56",
    type: "Individual project",
    techStack: "C++, Data Structures & Algorithms (DSA)",
    sourcelink: "https://github.com/SRIVASTAVA16/Library-management-system",
    points: [
      "Developed a comprehensive web-based library management system, improving book cataloging, search, and lending efficiency by 30% for student users",
      "Enhanced existing code to fix bugs, boosting overall functionality and improving user experience by 25%",
      "Focused on implementing core functionalities such as book addition, deletion, and inventory management using data structures for optimized performance",
    ],
  },
  {
    title: "Tic Tac Toe",
    color: "text-sky-500",
    icon: tictactoe,
    iconBg: "#E6DEDD",
    type: "Individual project",
    techStack: "C++, Minimax Algorithm, Visual Studio",
    sourcelink: "https://github.com/SRIVASTAVA16/Tic-Tac-Toe",
    points: [
      "Developed a fully functional Tic-Tac-Toe game with an AI opponent, utilizing the Minimax algorithm for optimal move generation, improving AI response time by 40%.",
      "Designed and implemented game logic with varying difficulty levels, allowing players to challenge AI or another player, increasing gameplay engagement by 20%.",
      "Enhanced game interactivity and visual experience with a clean UI for seamless gameplay",
    ],
  },
  {
    title: "High Fidelity food Application",
    color: "text-orange-600",
    icon: reslogo4,
    iconBg: "#383E56",
    type: "Individual project",
    techStack: "UI/UX Figma wireframes",
    sourcelink: "https://www.figma.com/design/EKjvtgepER7bbki7pjES4a/Untitled-(Copy)?node-id=0-1&t=PFn5Ywq1ZXPOvEq6-1",
    points: [
      "Designed high-fidelity wireframes for a seamless food ordering experience, focusing on user-friendly navigation and modern UI/UX principles.",
      "Implemented key functionalities including adding items to the cart, managing authentication, and enabling secure payments, resulting in a more intuitive user journey.",
      "Enhanced order tracking and item management features, allowing users to efficiently add, delete, and track food orders, improving overall user satisfaction.",
      "Streamlined checkout process with integrated payment gateways, boosting efficiency and ensuring a smooth transaction experience for customers."
    ],
  },
];

const testimonials = [
  {
    title:
      "I had a fantastic experience collaborating with Tuduru Himagiri Nandan. His exceptional frontend skills greatly enhanced out project, and I was able to improve my Python and Flask skills throughout the hackathon. Looking forward to more opportunities to learn and grow together!",
    name: "Naga Srinath",
    image: testimonial1, // I should change image of his here...
  },
];


export { services, technologies, experiences, testimonials };
