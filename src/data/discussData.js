export const discussData = {
  id: "community-platform",
  title: "Discuss Community",
  subtitle: "Build Meaningful Discussions & Verified Communities",
  heroDescription: "A modern community platform for structured discussions, verified members, collaboration, and knowledge sharing across educational ecosystems.",
  stats: [
    { label: "Active Communities", value: "250", suffix: "+" },
    { label: "Verified Members", value: "10", suffix: "k+" },
    { label: "Monthly Discussions", value: "45", suffix: "k+" },
    { label: "Verification Rate", value: "100", suffix: "%" }
  ],
  techStack: {
    frontend: [
      { name: "React", icon: "Code2" },
      { name: "Redux Toolkit", icon: "Layers" },
      { name: "React Router", icon: "Shuffle" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Lucide React", icon: "Sparkles" },
      { name: "Vite", icon: "Zap" }
    ],
    backend: [
      { name: "Django", icon: "Terminal" },
      { name: "Django REST", icon: "Globe" },
      { name: "JWT Auth", icon: "ShieldCheck" }
    ],
    database: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "SQLite", icon: "Box" }
    ]
  },
  features: [
    {
      title: "User Authentication",
      desc: "Secure JWT-based login and signup with session handling and encrypted credential storage.",
      icon: "ShieldCheck",
      color: "bg-blue-50 text-blue-600",
      details: ["JWT authentication", "Session handling", "Secure password hashing"]
    },
    {
      title: "Role-Based Access",
      desc: "Granular control for different user types including Students, Faculty, and Admins.",
      icon: "Users",
      color: "bg-purple-50 text-purple-600",
      details: ["Student roles", "Faculty verification", "Admin dashboard"]
    },
    {
      title: "Discussion System",
      desc: "Advanced nested discussion threads with real-time-like engagement and media support.",
      icon: "MessageSquare",
      color: "bg-pink-50 text-pink-600",
      details: ["Create posts", "Nested comments", "Emoji reactions"]
    },
    {
      title: "Community Verification",
      desc: "Trust-building system with verified faculty badges and trusted member indicators.",
      icon: "CheckCircle2",
      color: "bg-emerald-50 text-emerald-600",
      details: ["Faculty badges", "Verified labels", "Account trust scores"]
    },
    {
      title: "Modern UI/UX",
      desc: "A social-first interface designed for high engagement and intuitive navigation.",
      icon: "Layout",
      color: "bg-amber-50 text-amber-600",
      details: ["Responsive design", "Glassmorphism UI", "Smooth animations"]
    },
    {
      title: "Trending Intelligence",
      desc: "Algorithm-driven feed that highlights the most valuable and active discussions.",
      icon: "TrendingUp",
      color: "bg-cyan-50 text-cyan-600",
      details: ["Topic categorization", "Trending tags", "Popular threads"]
    }
  ],
  categories: [
    { name: "Technology", color: "from-blue-400 to-indigo-500", icon: "Cpu" },
    { name: "Programming", color: "from-emerald-400 to-teal-500", icon: "Code2" },
    { name: "Education", color: "from-amber-400 to-orange-500", icon: "GraduationCap" },
    { name: "Career Guidance", color: "from-rose-400 to-pink-500", icon: "Briefcase" },
    { name: "Student Discussions", color: "from-violet-400 to-purple-500", icon: "Users" },
    { name: "Faculty Hub", color: "from-cyan-400 to-blue-500", icon: "UserCheck" }
  ],
  structure: {
    frontend: [
      { name: "src/components", type: "folder", children: ["Feed", "Sidebar", "Auth", "Common"] },
      { name: "src/pages", type: "folder", children: ["Home", "Community", "Profile", "Login"] },
      { name: "src/store", type: "folder", children: ["authSlice", "postSlice", "communitySlice"] },
      { name: "src/assets", type: "folder", children: ["images", "styles"] }
    ],
    backend: [
      { name: "users_app", type: "folder", children: ["models.py", "serializers.py", "views.py"] },
      { name: "community_app", type: "folder", children: ["models.py", "serializers.py", "views.py"] },
      { name: "core_api", type: "folder", children: ["settings.py", "urls.py", "wsgi.py"] },
      { name: "requirements.txt", type: "file" }
    ]
  },
  authFlow: [
    { step: "User Login", desc: "Credentials provided via secure HTTPS form" },
    { step: "JWT Validation", desc: "Backend generates Access & Refresh tokens" },
    { step: "Role Verification", desc: "RBAC layer determines access level (Student/Faculty/Admin)" },
    { step: "Platform Access", desc: "User granted entry to authorized community features" }
  ]
};
