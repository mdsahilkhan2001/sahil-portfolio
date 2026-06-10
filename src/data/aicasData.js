export const aicasData = {
  id: "aicas-erp",
  title: "Microservices-Based ERP System",
  subtitle: "School & College Management Platform",
  heading: "Unified Enterprise ERP for Modern Academic Ecosystems",
  subheading: "A scalable multi-tenant platform powering both school and college-level institutions with microservices and event-driven infrastructure.",
  
  overview: "A microservices-based ERP platform designed to support both school-level and college-level educational institutions. The system handles academic, administrative, and operational workflows while maintaining strict role-based access control and multi-tenant data isolation.",
  deploymentStats: "Successfully deployed in 2+ colleges serving 4,000+ active users.",

  problemStatement: {
    title: "The Challenge",
    points: [
      "Different academic structures (classes vs departments/semesters)",
      "Multiple user roles with varying permissions",
      "Separate systems for academics, hostel, and grievance handling",
      "Rigidity of existing solutions (school-only or college-only)",
      "Scaling and customization complexities"
    ],
    solution: "Build a flexible ERP system that can serve both schools and colleges using the same core architecture, while adapting behavior based on institution type."
  },

  heroStats: [
    { label: "Colleges Implemented", value: "2", suffix: "+" },
    { label: "Active Users", value: "4000", suffix: "+" },
    { label: "System Uptime", value: "99.9", suffix: "%" },
    { label: "Average Response Time", value: "<200", suffix: "ms" },
  ],

  institutionBehavior: {
    school: [
      "Class-based structure (e.g., Grade 10-A)",
      "Simplified role hierarchy",
      "Direct teacher-student mapping",
      "Section-based organization"
    ],
    college: [
      "Department + Semester structure",
      "Complex role hierarchy (HODs, deans, etc.)",
      "Course-based enrollment",
      "Elective and credit systems"
    ]
  },

  techStack: {
    Frontend: [
      { name: "React", icon: "/icons/react.png", color: "from-cyan-400 to-blue-500" },
      { name: "Redux Toolkit", icon: "/icons/react.png", color: "from-purple-500 to-indigo-600" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg", color: "from-sky-400 to-cyan-500" },
      { name: "TypeScript", icon: "/icons/ts.png", color: "from-blue-600 to-blue-400" },
      { name: "shadcn/ui", icon: null, color: "from-gray-700 to-black" },
    ],
    Backend: [
      { name: "Django", icon: null, color: "from-green-700 to-emerald-900" },
      { name: "Django REST Framework", icon: null, color: "from-red-600 to-rose-800" },
      { name: "JWT Authentication", icon: null, color: "from-orange-500 to-amber-600" },
      { name: "Celery", icon: null, color: "from-green-400 to-lime-600" },
    ],
    Infrastructure: [
      { name: "PostgreSQL", icon: "/icons/sql.png", color: "from-blue-700 to-indigo-900" },
      { name: "Redis", icon: null, color: "from-red-500 to-rose-700" },
      { name: "RabbitMQ", icon: null, color: "from-orange-600 to-orange-400" },
      { name: "Docker", icon: null, color: "from-blue-500 to-sky-600" },
      { name: "Microservices Architecture", icon: null, color: "from-gray-600 to-slate-800" },
    ],
  },

  contributions: [
    {
      title: "Ticketing System",
      color: "bg-purple-50 border-purple-100",
      dotColor: "bg-purple-600",
      details: [
        "Developed role-based ticketing workflows allowing students, teachers, and admins to create, update, and resolve tickets",
        "Implemented category-based ticket filtering (academic, hostel, technical, administrative)",
        "Integrated frontend components with Django REST APIs for seamless ticket submission and tracking",
        "Added real-time status updates and notification system for ticket lifecycle"
      ]
    },
    {
      title: "Hostel Management",
      color: "bg-cyan-50 border-cyan-100",
      dotColor: "bg-cyan-600",
      details: [
        "Built room allocation and occupancy tracking features with vacancy management",
        "Created hostel-specific rules configuration (capacity limits, gender-based allocation, floor restrictions)",
        "Developed React-based hostel dashboards showing real-time occupancy, student lists, and room status",
        "Integrated with ticketing system for hostel-related grievances and maintenance requests"
      ]
    },
    {
      title: "Academic Structure Configuration",
      color: "bg-purple-50 border-purple-100",
      dotColor: "bg-purple-600",
      details: [
        "Designed flexible course definition system supporting both class-based (schools) and department/semester-based (colleges) structures",
        "Implemented filtering and validation logic to prevent invalid course-student mappings based on institution type",
        "Built frontend forms allowing admins to configure academic hierarchies dynamically",
        "Added enrollment management with validation rules for prerequisites and capacity limits"
      ]
    },
    {
      title: "Security & Multi-Tenancy",
      color: "bg-cyan-50 border-cyan-100",
      dotColor: "bg-cyan-600",
      details: [
        "Implemented JWT-based authentication with token refresh mechanisms",
        "Developed RBAC (Role-Based Access Control) ensuring users only access authorized resources",
        "Ensured strict data isolation between tenants (institutions) at database and API level",
        "Debugged and fixed permission-related issues across microservices"
      ]
    },
    {
      title: "Cross-Project Contributions",
      color: "bg-purple-50 border-purple-100",
      dotColor: "bg-purple-600",
      details: [
        "Integrated React frontend with multiple Django microservices using RESTful APIs",
        "Debugged cross-service communication issues and API endpoint inconsistencies",
        "Implemented React hooks and state management for complex workflows (ticketing, hostel allocation, course enrollment)",
        "Collaborated with team on API contract design and frontend-backend integration"
      ]
    }
  ],

  challenges: [
    { title: "Dual Structure Design", desc: "Designing a single system that works for both class-based (schools) and department/semester-based (colleges) structures required careful abstraction and configuration", color: "bg-orange-50 border-orange-100" },
    { title: "Role Complexity", desc: "Managing multiple user roles (students, teachers, HODs, admins, wardens) with overlapping permissions across different modules was challenging", color: "bg-red-50 border-red-100" },
    { title: "Microservices Debugging", desc: "Debugging issues across multiple microservices required tracing requests through different services and understanding inter-service dependencies", color: "bg-orange-50 border-orange-100" },
    { title: "UX Consistency", desc: "Maintaining consistent user experience across different modules (ticketing, hostel, academics) while each had unique workflows", color: "bg-red-50 border-red-100" }
  ],

  learnings: [
    { title: "Flexible ERP Design", desc: "Learned to design systems that are configurable and adaptable to different institution types rather than hardcoding business logic" },
    { title: "Microservices Architecture", desc: "Gained hands-on experience with microservices communication, API gateway patterns, and service orchestration" },
    { title: "RBAC Importance", desc: "Understood the critical importance of proper role-based access control in multi-tenant systems for security and data isolation" },
    { title: "React Component Reusability", desc: "Developed reusable, adaptable React components that work across different workflows and institution configurations" }
  ],

  achievements: [
    "Single platform serving both schools and colleges",
    "Reduced administrative duplication by 60%",
    "Improved data security with multi-tenant isolation",
    "Scalable architecture supporting institution growth"
  ],

  highlights: [
    { title: "Multi-Tenant Architecture", desc: "Complete data isolation between institutions with configurable settings" },
    { title: "Hostel Management", desc: "Room allocation, occupancy tracking, and warden dashboards" },
    { title: "Role-Based Access Control", desc: "Granular permissions for 10+ user roles across all modules" },
    { title: "Financial Operations", desc: "Fee management, payment processing, and financial reporting" },
    { title: "Academic Management", desc: "Student records, courses, grading, and enrollment systems" },
    { title: "Reporting & Analytics", desc: "Comprehensive dashboards and insights for decision-making" },
    { title: "Ticketing System", desc: "Centralized grievance handling with category-based routing" },
    { title: "API-First Design", desc: "RESTful APIs enabling third-party integrations and mobile apps" }
  ],

  performance: [
    { task: "User Login", before: "300ms", after: "10ms", improvement: "30x" },
    { task: "Standard Queries", before: "500ms", after: "20ms", improvement: "25x" },
    { task: "Large Joins (Data Intensive)", before: "5000ms", after: "20ms", improvement: "250x" },
    { task: "Cache Synchronization", before: "Synchronous", after: "Event-Driven (Async)", improvement: "Instant UI" },
  ],

  microservices: [
    { name: "API Gateway", role: "Entry Point & Routing", status: "Active" },
    { name: "Auth Service", role: "JWT & RBAC Management", status: "Active" },
    { name: "Administration", role: "Institution & Society Behavior", status: "Active" },
    { name: "Academics", role: "Courses & Enrollment", status: "Active" },
    { name: "Ticketing", role: "Grievance & Support", status: "Active" },
    { name: "Hostel", role: "Allocation & Tracking", status: "Active" },
  ]
};
