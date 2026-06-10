import f1Img from "../assets/f1.png";

export const movieData = {
  title: "Movie Explorer",
  subtitle: "Discover Cinema Beyond the Ordinary",
  heroDescription: "Modern movie exploration experience powered by TMDB APIs with seamless browsing, watchlist management, and immersive cinematic UI.",
  
  overview: "Movie Intelligence Hub is a sophisticated cinematic data platform built to deliver seamless movie discovery experiences through TMDB API integration, advanced filtering, and immersive modern UI design. The platform enables users to explore trending films, utilize powerful search capabilities, manage personalized watchlists, and seamlessly browse vast datasets. Built with React and Vite, the application focuses on performance, intelligent data presentation, and a premium frontend experience inspired by modern streaming platforms.",

  features: [
    {
      title: "Advanced Search & Filtering",
      desc: "Powerful search capabilities and multi-parameter filtering to discover exactly what you want to watch.",
      icon: "Search"
    },
    {
      title: "TMDB API Integration",
      desc: "Fetch real-time trending movies, popular films, and detailed metadata directly from the TMDB database.",
      icon: "Globe"
    },
    {
      title: "Data-Driven Intelligence",
      desc: "Intelligent sorting, rating visualizations, and categorizations for a complete analytical movie view.",
      icon: "Activity"
    },
    {
      title: "MyList Collections",
      desc: "Save favorite movies with persistent localStorage management for a personalized collection.",
      icon: "Heart"
    },
    {
      title: "Cinematic UI Experience",
      desc: "Modern streaming-style layouts, smooth interactions, and high-quality backdrop rendering.",
      icon: "Sparkles"
    },
    {
      title: "Fast Frontend Architecture",
      desc: "React + Vite optimization ensuring lightning-fast loading and smooth rendering performance.",
      icon: "Zap"
    }
  ],

  techStack: {
    frontend: [
      { name: "React 18", icon: "Code2" },
      { name: "Vite", icon: "Zap" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Framer Motion", icon: "Layout" }
    ],
    api: [
      { name: "TMDB API", icon: "Globe" },
      { name: "REST Endpoints", icon: "Terminal" },
      { name: "Data Fetching", icon: "Database" }
    ],
    features: [
      { name: "Advanced Filtering", icon: "Layout" },
      { name: "Dynamic Search", icon: "Globe" }
    ],
    storage: [
      { name: "localStorage", icon: "Database" },
      { name: "State Persistence", icon: "ShieldCheck" }
    ]
  },

  contributions: [
    {
      title: "Frontend Engineering",
      desc: "Built a lightning-fast, modern cinematic interface using React, Vite, and Tailwind CSS."
    },
    {
      title: "Advanced Filtering Logic",
      desc: "Developed complex state management for dynamic search, category filtering, and sorting algorithms."
    },
    {
      title: "TMDB API Integration",
      desc: "Integrated TMDB REST APIs to fetch, parse, and render massive datasets of trending and popular movies."
    },
    {
      title: "Watchlist Functionality",
      desc: "Engineered a persistent MyList feature utilizing localStorage to maintain user collections without a database."
    },
    {
      title: "UI & Motion Design",
      desc: "Designed premium streaming-style interactions, hover animations, and cinematic poster layouts."
    }
  ],

  challenges: [
    "Managing complex state for multi-parameter filtering",
    "Handling massive datasets from TMDB efficiently",
    "Optimizing rendering performance with Vite",
    "Designing responsive streaming-style grids",
    "Maintaining fast search query performance"
  ],

  learnings: [
    "API-driven frontend architecture",
    "Error handling strategies",
    "Local state persistence",
    "Cinematic UI/UX design",
    "Frontend performance optimization"
  ],

  metrics: [
    { value: "Smooth", label: "Movie browsing experience" },
    { value: "Reliable", label: "Fallback architecture" },
    { value: "Persistent", label: "Watchlist support" },
    { value: "Responsive", label: "Streaming-style UI" },
    { value: "Fast", label: "Rendering with Vite" },
    { value: "Premium", label: "Cinematic frontend" }
  ],

  links: {
    github: "https://github.com/mdsahilkhan2001/movie-explorer-website",
    live: "#"
  },
  img: f1Img
};
