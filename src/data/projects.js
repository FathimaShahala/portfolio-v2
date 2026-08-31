import achievements from "../assets/projects/booknest/achievements.png";
import addbook from "../assets/projects/booknest/addbook.png";
import dashboard from "../assets/projects/booknest/dashboard.png";
import editprofile from "../assets/projects/booknest/editprofile.png";
import favorite from "../assets/projects/booknest/favorite.png";
import home from "../assets/projects/booknest/home.png";
import login from "../assets/projects/booknest/login.png";    
import mybook from "../assets/projects/booknest/mybook.png";
import mybook2 from "../assets/projects/booknest/mybook2.png";
import profile from "../assets/projects/booknest/profile.png";
import readingtracker from "../assets/projects/booknest/readingtracker.png";
import readingtracker2 from "../assets/projects/booknest/readingtracker2.png";
import readingtracker3 from "../assets/projects/booknest/readingtracker3.png";
import readinggoal from "../assets/projects/booknest/readinggoal.png";
import register from "../assets/projects/booknest/register.png";    

export const projects = [
  {
    id: 1,
    featured: true,
    title: "BookNest",
    category: "Full Stack Web Application",
    description:
      "A MERN-based reading tracker that allows users to manage books, track reading progress, set yearly goals, and write reviews.",

    images: [
      achievements,
      addbook,
      dashboard,
      editprofile,
      favorite,
      home,
      login,
      mybook,
      mybook2,
      profile,
      readingtracker,
      readingtracker2,
      readingtracker3,
      readinggoal,
      register,
    ],

    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer", "Axios"],

    features: [
      "JWT Authentication",
      "Reading Tracker",
      "Reviews & Ratings",
      "Reading Goals",
      "Favorites",
      "Dashboard Analytics",
    ],

    github: "https://github.com/FathimaShahala/BookNest",
    live: "",

  },
// ------------------------------------
  {
    id: 2,
    featured: false,
    title: "MigrantLink",
    category: "MERN Web Application",
    description:
      "Role-based web platform connecting migrant workers, employers, police, and insurers.",
 images: [
      achievements,
      addbook,
    ],
    tech: ["React", "Node", "MongoDB", "Express"],

    github: "",
    live: "",
  },
// ------------------------------------
  {
    id: 3,
    featured: false,
    title: "Flutter Project",
    category: "Mobile Application",
    description:
      "Cross-platform Flutter application built using Dart and Firebase.",
 images: [
      achievements,
      addbook,
    ],
    tech: ["Flutter", "Dart", "Firebase"],

    github: "",
    live: "",
  },
];
