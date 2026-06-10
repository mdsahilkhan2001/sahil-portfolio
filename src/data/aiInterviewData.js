export const aiData = {
  title: "AI Interview Platform",
  subtitle: "Intelligent Technical Interview Infrastructure",
  heroDescription: "An intelligent interview infrastructure built to automate scheduling, manage interview workflows, ensure session continuity, and deliver seamless technical interview experiences at scale.",
  
  overview: "The AI Interview Platform is a production-ready interview management system designed to automate and scale technical interviews while maintaining reliability, continuity, and exceptional candidate experience. The platform supports multiple user roles including students, interviewers, reviewers, and administrators. It provides intelligent scheduling workflows, secure authentication, interview state persistence, and AI-assisted evaluation systems. A key focus of the platform is ensuring uninterrupted interview experiences through advanced session recovery and synchronization mechanisms.",

  problems: [
    {
      title: "Manual Scheduling Complexity",
      desc: "Managing interviews manually becomes difficult at scale.",
    },
    {
      title: "Session Interruption Issues",
      desc: "Browser refreshes and interruptions can lead to interview progress loss.",
    },
    {
      title: "Scalability Challenges",
      desc: "Traditional interview workflows struggle with large candidate volumes.",
    },
    {
      title: "Inconsistent Candidate Experience",
      desc: "Poor workflow continuity reduces trust and completion rates.",
    }
  ],

  techStack: {
    frontend: [
      { name: "React", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "State Management", icon: "Layers" },
      { name: "WebSocket", icon: "Zap" }
    ],
    backend: [
      { name: "Django REST", icon: "Terminal" },
      { name: "JWT Auth", icon: "ShieldCheck" },
      { name: "API Architecture", icon: "Globe" }
    ],
    database: [
      { name: "PostgreSQL", icon: "Database" }
    ],
    ai: [
      { name: "AI Integration", icon: "Sparkles" },
      { name: "Real-time Sessions", icon: "Clock" },
      { name: "Role-Based Control", icon: "Lock" }
    ]
  },

  features: [
    {
      title: "AI-Powered Interview Workflow",
      desc: "AI-assisted evaluation, dynamic question generation, and intelligent workflows.",
      icon: "Sparkles"
    },
    {
      title: "Interview Scheduling System",
      desc: "Slot management, role-based scheduling, and validation handling.",
      icon: "Calendar"
    },
    {
      title: "Session State Recovery",
      desc: "Browser refresh persistence, state synchronization, and reliability improvements.",
      icon: "RefreshCw"
    },
    {
      title: "Role-Based Access",
      desc: "Isolated access for Students, Reviewers, Admins, and Interviewers.",
      icon: "Users"
    },
    {
      title: "Real-Time Session Management",
      desc: "Live progress tracking, synchronization handling, and interview continuity.",
      icon: "Activity"
    },
    {
      title: "Secure Authentication",
      desc: "JWT authentication, protected workflows, and highly secure APIs.",
      icon: "ShieldCheck"
    }
  ],

  contributions: [
    {
      title: "Interview Scheduling",
      desc: "Implemented scalable scheduling workflows connecting students, templates, and interview slots with backend validation and role-based management."
    },
    {
      title: "Session Management",
      desc: "Built session start, completion tracking, and synchronized question flow handling between frontend and backend systems."
    },
    {
      title: "Session Recovery System",
      desc: "Designed and implemented advanced session persistence and recovery mechanisms to prevent interview progress loss during browser refreshes and interruptions."
    },
    {
      title: "API Integration",
      desc: "Integrated frontend workflows with backend APIs ensuring synchronization accuracy and smooth candidate experiences."
    }
  ],

  challenges: [
    "Complex interview state transitions",
    "Frontend/backend synchronization",
    "Real-time session continuity",
    "Timing and workflow consistency",
    "Reliability during interruptions"
  ],

  learnings: [
    "Reliability-focused system design",
    "State persistence architecture",
    "Workflow resilience engineering",
    "Scalable scheduling systems",
    "User trust through continuity"
  ],

  metrics: [
    { value: "99.5%", label: "Interview Completion Rate" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "500+", label: "Active Users" },
    { value: "Reduced", label: "Interview Drop-offs" },
    { value: "Improved", label: "Candidate Reliability" },
    { value: "Scalable", label: "Scheduling Infrastructure" }
  ]
};
