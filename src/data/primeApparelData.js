export const primeData = {
  id: "prime-apparel",
  title: "Prime Apparel B2B ERP",
  role: "Full Stack MERN Developer",
  subtitle: "Enterprise-grade B2B ERP platform built for apparel manufacturers, wholesalers, and buyers to streamline operations, inventory, quotations, and bulk order management globally.",
  github: "https://github.com/mdsahilkhan2001",
  live: "",
  img: "/project section img/b2b erp.png",
  heroImg: "/project section img/b2b herosection.png",

  stats: [
    { value: "40%", label: "Faster Order Processing" },
    { value: "60%", label: "Better Inventory Visibility" },
    { value: "3", label: "Role-based Dashboards" },
    { value: "Real-time", label: "Communication Enabled" },
  ],

  dashboardPreviews: [
    { label: "Admin Dashboard", img: "/project section img/admin dashboard.png" },
    { label: "Seller Dashboard", img: "/project section img/seller dashbaord.png" },
    { label: "Buyer Dashboard", img: "/project section img/buyer dashboard.png" },
    { label: "Order Management", img: "/project section img/order managememnt.png" },
    { label: "Inventory Panel", img: "/project section img/inventory management.png" },
    { label: "Mobile Responsive", img: "/project section img/moblie responsivie.png" },
  ],

  about: `Prime Apparel B2B ERP is a comprehensive enterprise resource planning platform engineered specifically for the global garment manufacturing ecosystem. The apparel industry suffers from fragmented supply chains, manual order tracking, and poor visibility across buyer-seller workflows — problems that directly translate into delayed shipments, inventory mismatches, and lost revenue.

This platform solves those problems by unifying the entire operational lifecycle — from product discovery and RFQ generation to bulk order placement, inventory management, and shipment tracking — into a single, role-aware digital workspace.

The system features three isolated dashboards: Admin (full control), Seller/Manufacturer (product listing, inventory, order fulfillment), and Buyer (catalog browsing, quotation requests, order tracking). Real-time notifications powered by Socket.io keep every stakeholder aligned, while MongoDB aggregation pipelines ensure high-performance reporting at scale.

Built for global export-import workflows, the platform supports multi-currency quotations, document management via Cloudinary, and secure JWT-based authentication with role-based access control — making it production-ready for enterprise deployment.`,

  features: [
    { icon: "🔐", title: "Multi-role Authentication", desc: "JWT-secured login with Admin, Seller, and Buyer roles — each with isolated permissions and dashboards." },
    { icon: "📊", title: "Buyer & Seller Dashboard", desc: "Purpose-built dashboards with real-time KPIs, order summaries, and workflow notifications." },
    { icon: "🏭", title: "ERP Management System", desc: "End-to-end enterprise resource planning covering products, orders, inventory, and users." },
    { icon: "📦", title: "Inventory Tracking", desc: "Live stock visibility with low-stock alerts, SKU management, and category-level analytics." },
    { icon: "🛒", title: "Bulk Order Processing", desc: "Streamlined bulk order workflow with quantity tiers, pricing rules, and fulfillment tracking." },
    { icon: "📋", title: "RFQ & Quotation System", desc: "Buyers send RFQs; sellers respond with detailed quotations, negotiation history preserved." },
    { icon: "🔔", title: "Real-time Notifications", desc: "Socket.io powered instant alerts for order updates, new RFQs, and status changes." },
    { icon: "📈", title: "Analytics Dashboard", desc: "Visual revenue charts, top products, order trends, and buyer activity heatmaps." },
    { icon: "🖼️", title: "Product Showcase", desc: "Rich product listings with Cloudinary-hosted images, specs, MOQ, and pricing." },
    { icon: "🔄", title: "Order Lifecycle Tracking", desc: "Full order traceability from placement → processing → dispatch → delivered." },
    { icon: "🛡️", title: "Role-based Access Control", desc: "Granular middleware-enforced permissions ensuring data isolation per user role." },
    { icon: "🔑", title: "Secure JWT Authentication", desc: "Access & refresh token strategy with httpOnly cookies and route-level guards." },
  ],

  techStack: {
    Frontend: [
      { name: "React.js", color: "from-cyan-500 to-blue-500", icon: "/icons/react.png" },
      { name: "Tailwind CSS", color: "from-sky-400 to-cyan-500", icon: "/icons/tailwind.jpeg" },
      { name: "Redux Toolkit", color: "from-violet-500 to-purple-600", icon: "/icons/react.png" }, // Using react icon as fallback
      { name: "Axios", color: "from-blue-500 to-indigo-500" },
    ],
    Backend: [
      { name: "Node.js", color: "from-green-500 to-emerald-600", icon: "/icons/node.png" },
      { name: "Express.js", color: "from-gray-500 to-slate-600", icon: "/icons/express.png" },
      { name: "MongoDB", color: "from-lime-500 to-green-600", icon: "/icons/mongodb.png" },
      { name: "JWT", color: "from-orange-500 to-amber-500" },
    ],
    "Tools & Services": [
      { name: "Cloudinary", color: "from-blue-400 to-sky-500" },
      { name: "Socket.io", color: "from-gray-700 to-gray-900" },
      { name: "GitHub", color: "from-gray-600 to-gray-800" },
      { name: "Postman", color: "from-orange-400 to-red-500" },
    ],
  },

  challenges: [
    {
      challenge: "Managing large-scale inventory across multiple product categories with real-time accuracy",
      solution: "Implemented optimized MongoDB aggregation pipelines with indexed queries, reducing inventory fetch time by 70%.",
    },
    {
      challenge: "Real-time order synchronization keeping all three user roles updated simultaneously",
      solution: "Integrated Socket.io event broadcasting with room-based channels — each order update fires to relevant stakeholders only.",
    },
    {
      challenge: "Complex role-based permission handling without code duplication",
      solution: "Built reusable Express middleware factory functions that generate role-specific guard layers from a single source of truth.",
    },
    {
      challenge: "High-performance dashboard rendering with heavy aggregated data",
      solution: "Applied lazy loading, pagination, and client-side memoization via Redux selectors to keep dashboards snappy.",
    },
  ],

  contributions: [
    "Designed and implemented the full scalable MERN stack architecture from scratch",
    "Developed 40+ RESTful API endpoints with proper error handling and validation",
    "Built a fully responsive React frontend with reusable component library",
    "Implemented JWT authentication with refresh token rotation and role guards",
    "Optimized MongoDB queries using aggregation pipelines and compound indexes",
    "Integrated Cloudinary for multi-image product upload and management",
    "Built real-time notification system using Socket.io with room-based events",
    "Created reusable UI components: tables, modals, charts, and form builders",
  ],

  timeline: [
    { step: "01", label: "Research", desc: "Industry analysis, competitor study, user personas" },
    { step: "02", label: "UI/UX Design", desc: "Wireframes, component library, design tokens" },
    { step: "03", label: "Backend Dev", desc: "Database schema, API architecture, auth system" },
    { step: "04", label: "API Integration", desc: "REST endpoints, Socket.io, Cloudinary hooks" },
    { step: "05", label: "Frontend Dev", desc: "React components, Redux state, responsive layouts" },
    { step: "06", label: "Testing", desc: "Postman API tests, UI testing, role validation" },
    { step: "07", label: "Deployment", desc: "Cloud hosting, env config, production launch" },
  ],
};
