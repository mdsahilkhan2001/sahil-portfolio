 // ✅ Import project images (keep assets for projects)
import productImg from "../assets/product.png";
import f1Img from "../assets/f1.png";
import figmaImg from "../assets/figma.png";
import reumefile from "../assets/resum.pdf"

// ✅ Use public folder for profile and skills
export const siteMeta = {
  name: "MD SAHIL KHAN",
  tagline: "Building delightful interfaces & scalable backends",
  roleTypes: [
    "Frontend Developer",
    "MERN Stack",
    "Data Science Enthusiast"
  ],
  phone: "+91 7079990338",
  email: "mdsahilkhan2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahilkhanq1",
  github: "https://github.com/mdsahilkhan2001",
  resumeUrl: reumefile
};

export const about = {
  photo: "/profile.jpg",
  summary: "Full Stack Developer with expertise in MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in building scalable web applications, RESTful APIs, and responsive user interfaces. Familiar with data analysis and machine learning concepts.",
  location: "BTM Layout,Bangalore, Karnataka"
};

export const skills = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Next.js", icon: "/icons/nextjs.jpeg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "Exprees", icon: "/icons/express.png" }, // kept typo to match your data
  { name: "JavaScript", icon: "/icons/js.jpeg" },
  { name: "Typescript", icon: "/icons/ts.png" },
  { name: "HTML", icon: "/icons/html.jpeg" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "PowerBi", icon: "/icons/powerbi.jpeg" },
  { name: "Tableau", icon: "/icons/tableou.png" },
  { name: "Excel", icon: "/icons/excel.jpeg" },
  { name: "Machine Learning", icon: "/icons/ml.png" },
];

// ✅ Projects still use imported assets
export const projects = [
  {
    id: "f1",
    title: "F1 Streetwear Framer E-commerce",
    desc: "Visually engaging e-commerce site built with Framer and modern animations.",
    github: "https://github.com/mdsahilkhan2001/F1-streetwear-Framer-e-commerce",
    live: "https://f1-streetwear-framer-e-commerce.vercel.app/",
    tags: ["Web", "UI/UX"],
    img: productImg
  },
  {
    id: "movie",
    title: "Movie Explorer",
    desc: "Responsive app to browse/search movies using TMDB API.",
    github: "https://github.com/mdsahilkhan2001/movie-explorer-website",
    live: "#",
    tags: ["Web"],
    img: f1Img
  },
  {
    id: "SkinCare",
    title: "Beauty product",
    desc: "Cloned the beauty product platform using React.js, Next.js, and Tailwind CSS.",
    github: "https://github.com/mdsahilkhan2001/Convert-provided-Figma-designs-into-fully-responsive-web-pages",
    live: "https://convert-provided-figma-designs-into.vercel.app/",
    tags: ["Web"],
    img: figmaImg
  }
];

export const timeline = [
  {
    id: "collage",
    title: "Collage",
    timeframe: "2019 - 2023",
    desc: "B.Tech in Computer Science and Engineering from Gaya collage of engineering , gaya.",
  },
  {
    id: 11,
    title: "Frontend Developer",
    company: "DMX Tech Services Pvt. Ltd. Bangalore",
    timeframe: "Jun 2024 - Present",
    desc: "Building responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS.",
  },
  {
    id: 1,
    title: "MERN Stack Javascript Training - Fynde",
    timeframe: " Issued on  may 6 ,2025 ",
    desc: "Completed a MERN stack javascript training course at Fynde, gaining hands-on experience in building full-stack web applications using React.js, Node.js, Express.js, and MongoDB."
  },
  {
    id: 2,
    title: "Data Science Intern ",
    timeframe: "Jan 2024 - Aug 2024",
    company:"Evostra venture pvt ltd ",
    desc: "Internship involving data analysis and model building."
  }
];
