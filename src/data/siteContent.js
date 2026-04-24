 // ✅ Import project images (keep assets for projects)
import productImg from "../assets/product.png";
import f1Img from "../assets/f1.png";
import figmaImg from "../assets/figma.png";
import reumefile from "../assets/resum.pdf"

// ✅ Use public folder for profile and skills
export const siteMeta = {
  name: "MD SAHIL KHAN",
  tagline: "Building intelligent software & data-driven solutions",
  roleTypes: [
    "Software Engineer",
    "Data Analyst",
    "Full Stack Developer",
    "MERN Stack Developer"
  ],
  phone: "+91 82912 20629",
  email: "mdsahilkhan2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahilkhanq1",
  github: "https://github.com/mdsahilkhan2001",
  resumeUrl: reumefile
};

export const about = {
  photo: "/icons/photo my2.png",
  summary: "Software Engineer and Data Analyst with 3+ years of experience in building scalable ERP systems and AI-powered platforms. Expert in React, Node.js, Python, and SQL, with a passion for translating complex data into actionable business insights. Specializing in high-performance web architecture and intelligent automation.",
  location: "Bangalore, India"
};

export const skills = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Next.js", icon: "/icons/nextjs.jpeg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "JavaScript", icon: "/icons/js.jpeg" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "HTML", icon: "/icons/html.jpeg" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Power BI", icon: "/icons/powerbi.jpeg" },
  { name: "Tableau", icon: "/icons/tableou.png" },
  { name: "Excel", icon: "/icons/excel.jpeg" },
  { name: "Machine Learning", icon: "/icons/ml.png" },
];

// ✅ Projects still use imported assets
export const projects = [
  {
    id: "prime-apparel",
    title: "Prime Apparel B2B ERP",
    desc: "A full-stack MERN enterprise system streamlining inventory, bulk orders, and buyer-seller workflows for garment manufacturing.",
    github: "https://github.com/mdsahilkhan2001",
    live: "",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    img: "/icons/primeappreal.png",
    companyProject: true,
    role: "Full Stack MERN Developer",
    details: {
      idea: "To engineer a centralized B2B platform for a clothing manufacturing brand, designed to automate and manage complex buyer-seller operations, global export-import workflows, and real-time inventory tracking.",
      summary: "This robust full-stack ERP system is tailored for the garment manufacturing industry. It features isolated, role-specific dashboards for Admins, Sellers (Manufacturers), and Buyers, enabling seamless product listing, bulk order management, and operational transparency.",
      features: [
        "Multi-Tier Role Management (Admin, Buyer, Seller)",
        "Advanced Product & Real-time Inventory Tracking",
        "Automated Bulk Order Placement & Workflow",
        "Live Order Tracking & Status Dispatching",
        "High-Security JWT Authentication & Authorization"
      ],
      contribution: "Architected and developed the entire application using the MERN stack. Designed a highly responsive React.js frontend, built scalable Node.js/Express REST APIs, and managed database operations via MongoDB. Implemented rigorous security measures and optimized complex query performance for bulk data.",
      techStack: "React.js, Node.js, Express.js, MongoDB, JWT",
      highlights: "Delivered a fully functional real-world B2B ERP system that significantly improved operational efficiency, workflow automation, and transparency across the manufacturing pipeline."
    }
  },
  {
    id: "community-platform",
    title: "Enterprise Community Platform",
    desc: "A scalable, real-time discussion platform with role-based access control and advanced content moderation.",
    github: "https://github.com/mdsahilkhan2001", 
    live: "", 
    tags: ["React", "Django", "PostgreSQL", "JWT"],
    img: "/icons/discuss coomunity.png",
    companyProject: true,
    role: "Project Lead & Full Stack Developer",
    details: {
      idea: "To build a highly secure, full-stack community discussion platform that facilitates real-time user interaction while maintaining stringent content moderation through an advanced admin panel.",
      summary: "This enterprise-grade application allows verified users to create posts, interact via likes/comments, and explore trending communities. It is engineered to handle real-time interactions and provides a seamless user experience, underpinned by robust security and role-based access control (RBAC).",
      features: [
        "Dynamic Post & Engagement System (Create, Edit, Delete, Like, Comment)",
        "Advanced Admin Verification & Content Moderation",
        "Role-Based Access Control (Admin, Verified, User)",
        "Real-time UI Experience & Activity Tracking",
        "Secure JWT-based Authentication System"
      ],
      contribution: "Spearheaded the development as Project Lead. Architected the complete frontend using React.js and built a secure, scalable backend with Django & REST APIs. Designed the database schema, implemented the JWT authentication, and optimized the engagement system for high performance.",
      techStack: "React.js, Django REST Framework, PostgreSQL/MongoDB, JWT, Git",
      highlights: "Successfully delivered a real-world scalable platform focused on clean UI, fast performance, and secure community-driven engagement."
    }
  },
  {
    id: "erp-lms",
    title: "Unified ERP + LMS System",
    desc: "A centralized platform integrating business operations (ERP) and educational workflows (LMS) into a single scalable solution.",
    github: "https://github.com/mdsahilkhan2001",
    live: "", 
    tags: ["React", "Node.js", "MongoDB", "Analytics"],
    img: "/icons/erp project.png",
    companyProject: true,
    role: "Project Lead & Full Stack Engineer",
    details: {
      idea: "To simplify complex organizational workflows by merging business operations (ERP) and learning management (LMS) into a single, cohesive, and highly scalable platform for educational institutions.",
      summary: "This full-stack unified platform provides dedicated dashboards for Admins, Staff, and Students. It handles critical operations such as attendance tracking, fee management, detailed reporting, course management, and performance analytics.",
      features: [
        "Multi-Role Dashboards (Admin, Teacher, Student)",
        "Comprehensive Course & Content Management (LMS)",
        "Automated Fee, Finance & Attendance Tracking (ERP)",
        "Real-time Data Analytics & Custom Reporting",
        "Multi-branch & Multi-user Scalability"
      ],
      contribution: "Led the project architecture and full-stack implementation. Built the responsive UI with React.js and developed the backend APIs using Node.js/Express. Implemented the role-based dashboards, secure JWT authentication, and integrated complex analytics for data-driven reporting.",
      techStack: "React.js, Node.js (Express), MongoDB, JWT, Postman",
      highlights: "Engineered a complete ERP + LMS hybrid system focused on scalability, performance, and delivering actionable data insights."
    }
  },
  {
    id: "f1",
    title: "F1 Streetwear E-commerce",
    desc: "A high-performance e-commerce platform with complex state management and smooth animations.",
    github: "https://github.com/mdsahilkhan2001/F1-streetwear-Framer-e-commerce",
    live: "https://f1-streetwear-framer-e-commerce.vercel.app/",
    tags: ["React", "Framer Motion", "Tailwind"],
    img: productImg,
    details: null
  },
  {
    id: "movie",
    title: "Movie Intelligence Hub",
    desc: "Data-driven movie explorer utilizing TMDB API with advanced filtering and search capabilities.",
    github: "https://github.com/mdsahilkhan2001/movie-explorer-website",
    live: "#",
    tags: ["React", "API Integration"],
    img: f1Img,
    details: null
  },
  {
    id: "SkinCare",
    title: "Luxe Skincare Platform",
    desc: "A premium, responsive skincare marketplace built from complex Figma designs.",
    github: "https://github.com/mdsahilkhan2001/Convert-provided-Figma-designs-into-fully-responsive-web-pages",
    live: "https://convert-provided-figma-designs-into.vercel.app/",
    tags: ["Next.js", "Tailwind", "Figma-to-Code"],
    img: figmaImg,
    details: null
  }
];

export const timeline = [

  {
    id: "dmx",
    title: "Software Engineer",
    company: "DMX Tech Services Pvt. Ltd.",
    timeframe: "May 2025 - Present",
    desc: "Spearheading the architectural design and full-stack development of high-scale enterprise solutions. Driving end-to-end engineering for complex College ERPs, sophisticated e-learning ecosystems, and data-intensive logistics platforms using modern stacks.",
    projects: [
      {
        name: "College ERP System",
        detail: "A highly scalable, microservices-driven College Management ERP. Features an advanced 15-tier Role-Based Access Control system to seamlessly orchestrate Academics, Finance, Transport, and Library operations across campus."
      },
      {
        name: "T.I.M.E. Kids Preschool",
        detail: "A visually stunning, high-performance web platform featuring cinematic GSAP & Framer Motion animations. Engineered with Next.js 14 to deliver a lightning-fast experience for franchise onboarding."
      },
      {
        name: "Code Compiler Platform",
        detail: "An ultra-fast, real-time code execution environment. Features robust Redux state management, secure authentication, and a sleek, developer-centric interface built with React."
      },
      {
        name: "TM Logistics ERP",
        detail: "An enterprise-grade logistics engine automating multi-branch operations. Features dynamic, localized PDF generation and complex Lorry Receipt (LR) workflows built on Django REST Framework."
      }
    ]
  },
  {
    id: "evoastra",
    title: "Data Science & AI/ML Intern",
    company: "Evoastra Ventures",
    timeframe: "Jan 2024 - Aug 2024",
    desc: "Spearheaded advanced AI/ML research and development. Engineered predictive models, robust web scraping pipelines, and sophisticated computer vision systems for healthcare and biometric analytics.",
    projects: [
      {
        name: "COVID-19 Detection System",
        detail: "Developed a deep learning diagnostic tool using Convolutional Neural Networks (CNNs) to accurately detect and classify COVID-19 from medical imaging data."
      },
      {
        name: "Automated Blood Test Analyzer",
        detail: "Engineered an AI-powered pipeline for automated blood report analysis, leveraging OCR and machine learning to extract and process critical health metrics."
      },
      {
        name: "Real-time Face & Emotion Detection",
        detail: "Built advanced computer vision models utilizing OpenCV and deep neural networks to achieve real-time facial recognition, emotion tracking, and animation detection."
      },
      {
        name: "Enterprise Web Scraping Pipelines",
        detail: "Architected highly scalable data extraction architectures using Python to scrape, clean, and process massive business datasets for predictive analytics."
      }
    ]
  },
  {
    id: "freelance",
    title: "Freelance Full Stack Developer",
    timeframe: "2022 - 2025",
    desc: "Successfully delivered 5+ complex, full-stack enterprise projects for global clients. Specialized in engineering scalable architectures for global B2B e-commerce, educational systems, and secure community networks.",
    projects: [
      {
        name: "Global B2B Wholesale Platform",
        detail: "Architected an Alibaba-style B2B manufacturing and export platform. Features complex multi-tier buyer-seller workflows, global inventory tracking, and secure bulk order management."
      },
      {
        name: "Unified ERP + LMS System",
        detail: "Engineered a hybrid educational platform merging organizational ERP workflows with Learning Management System (LMS) capabilities. Handles attendance, finance, and dynamic course content."
      },
      {
        name: "Enterprise Community Network",
        detail: "Developed a highly secure, real-time discussion platform. Features advanced role-based access control, real-time engagement metrics, and stringent admin content moderation."
      }
    ]
  },
  {
    id: "education",
    title: "B.Tech in Computer Science & Engineering",
    company: "Gaya College of Engineering, Bihar",
    timeframe: "2019 - 2023",
    desc: "Built a robust foundation in software engineering principles with specialized coursework in Advanced Data Structures & Algorithms, Database Management Systems (DBMS), and Machine Learning. Graduated with strong academic standing, achieving a 7.99 CGPA.",
  }
];
