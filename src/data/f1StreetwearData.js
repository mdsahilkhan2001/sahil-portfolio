export const f1Data = {
  title: "F1 Streetwear",
  subtitle: "High-Speed Fashion Inspired by Racing Culture",
  heroDescription: "Modern Formula-inspired streetwear platform delivering premium shopping experiences with smooth animations, seamless checkout workflows, and responsive fashion-focused UI.",
  
  overview: "F1 Streetwear is a modern fashion-focused e-commerce platform inspired by Formula racing culture and premium streetwear aesthetics. The platform delivers seamless shopping experiences with animated product interactions, responsive UI design, secure authentication workflows, and lightweight cloud-based backend integration powered by Google Apps Script and Google Sheets. Built for speed, simplicity, and visual engagement, the platform focuses on smooth user experiences across product browsing, authentication, cart management, and checkout workflows.",

  features: [
    {
      title: "Authentication System",
      desc: "Login, Signup, Forgot Password, and OTP verification workflow.",
      icon: "ShieldCheck"
    },
    {
      title: "Shopping Experience",
      desc: "Add to Cart, Remove Products, cart persistence, and smooth product interactions.",
      icon: "ShoppingBag"
    },
    {
      title: "Checkout Workflow",
      desc: "Order summary, GST calculations, and order confirmation flow.",
      icon: "CreditCard"
    },
    {
      title: "Responsive Design",
      desc: "Mobile-first UI, optimized layouts, and cross-device compatibility.",
      icon: "Smartphone"
    },
    {
      title: "Animated User Experience",
      desc: "Framer Motion transitions, smooth hover interactions, and product animations.",
      icon: "Sparkles"
    },
    {
      title: "Cloud-Based Backend",
      desc: "Google Apps Script APIs, Google Sheets storage, and lightweight serverless architecture.",
      icon: "Cloud"
    }
  ],

  techStack: {
    frontend: [
      { name: "React 18", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Framer Motion", icon: "Zap" },
      { name: "React Toastify", icon: "Bell" }
    ],
    backend: [
      { name: "Google Apps Script", icon: "Terminal" },
      { name: "Google Sheets DB", icon: "Database" },
      { name: "RESTful APIs", icon: "Globe" }
    ],
    infrastructure: [
      { name: "Vercel Edge", icon: "Globe" },
      { name: "Serverless", icon: "Cloud" },
      { name: "JWT Auth", icon: "ShieldCheck" }
    ],
    design: [
      { name: "Lucide Icons", icon: "Layout" },
      { name: "Modern UX", icon: "Smartphone" },
      { name: "Responsive", icon: "Layout" }
    ]
  },

  contributions: [
    {
      title: "Frontend Development",
      desc: "Built responsive ecommerce interfaces using React, Tailwind CSS, and Framer Motion with focus on modern shopping experiences."
    },
    {
      title: "Authentication Workflow",
      desc: "Implemented login, signup, forgot password, and OTP-based reset workflows integrated with Google Apps Script APIs."
    },
    {
      title: "Cart & Checkout System",
      desc: "Developed add-to-cart functionality, order calculations, GST handling, and checkout confirmation flows."
    },
    {
      title: "Backend Integration",
      desc: "Integrated cloud-hosted Google Apps Script APIs with frontend workflows for authentication and order management."
    },
    {
      title: "UI & Motion Design",
      desc: "Designed animated fashion-focused interfaces with responsive layouts and smooth user interactions."
    }
  ],

  challenges: [
    "Managing authentication using sheet-based backend",
    "OTP validation workflows",
    "Maintaining responsive ecommerce layouts",
    "Handling smooth cart state management",
    "Optimizing animations without performance loss"
  ],

  learnings: [
    "Lightweight backend architecture",
    "Serverless authentication systems",
    "Responsive ecommerce UI design",
    "Smooth frontend state handling",
    "Fashion-focused UX design"
  ],

  metrics: [
    { value: "Smooth", label: "Mobile shopping experience" },
    { value: "Fully", label: "Responsive ecommerce UI" },
    { value: "Lightweight", label: "Cloud backend" },
    { value: "Real-time", label: "Order workflow" },
    { value: "Secure", label: "OTP-based authentication" },
    { value: "Fast", label: "Deployment with Vercel" }
  ],

  links: {
    github: "https://github.com/mdsahilkhan2001/F1-streetwear-Framer-e-commerce",
    live: "https://f1-streetwear-framer-e-commerce.vercel.app/"
  }
};
