export const hospitalData = {
  id: "hospital-analytics",
  title: "US Hospital ERP Analytics Dashboard",
  role: "Data Analyst · BI Developer",
  subtitle: "Advanced enterprise healthcare business intelligence platform built using Power BI and DAX to transform complex hospital ERP data into actionable operational and financial insights.",
  heroDescription: "Advanced ERP-style healthcare analytics dashboard designed to monitor hospital operations, patient outcomes, financial KPIs, and business performance through interactive Power BI reporting.",
  github: "https://github.com/mdsahilkhan2001",
  live: "",

  overview: `US Hospital ERP Analytics Dashboard is an advanced healthcare analytics platform designed to transform hospital operational data into actionable business intelligence through interactive reporting and ERP-style KPI visualization.

Built using Power BI, DAX, Excel, and Power Query, the dashboard provides comprehensive insights into patient outcomes, hospital efficiency, revenue analytics, operational metrics, and healthcare provider performance.

The project demonstrates practical implementation of modern business intelligence workflows including data cleaning, KPI monitoring, interactive dashboard design, and executive-level reporting for healthcare decision-making.`,

  stats: [
    { value: "10k+", label: "Patients Analyzed" },
    { value: "ERP", label: "Dashboard Style" },
    { value: "DAX", label: "Logic Engine" },
    { value: "99%", label: "Data Accuracy" },
  ],

  features: [
    {
      icon: "📋",
      title: "Executive Summary Dashboard",
      desc: "High-level overview of total patients, revenue monitoring, expense tracking, and core operational KPIs.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "🏥",
      title: "Hospital Performance Analytics",
      desc: "Detailed analysis of admission trends, discharge rates, department performance, and resource utilization.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: "👥",
      title: "Patient Outcome Analysis",
      desc: "Demographic insights, recovery trends, treatment monitoring, and healthcare outcome visualizations.",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: "💰",
      title: "Revenue & Expense Analytics",
      desc: "Financial KPI tracking, cost optimization analysis, and granular revenue/expense trend monitoring.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: "🖱️",
      title: "Interactive BI Reporting",
      desc: "Dynamic filters, drill-through reports, cross-filtering, and intuitive dashboard navigation.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: "📑",
      title: "Healthcare Provider Metrics",
      desc: "Insurance analytics, provider performance tracking, and operational efficiency reporting.",
      color: "from-rose-500 to-pink-600",
    },
  ],

  techStack: {
    "Business Intelligence": [
      { name: "Power BI", icon: "BarChart", color: "from-yellow-500 to-amber-600" },
      { name: "DAX", icon: "Zap", color: "from-blue-500 to-indigo-600" },
      { name: "Power Query", icon: "Filter", color: "from-emerald-500 to-teal-600" },
    ],
    "Data Processing": [
      { name: "Excel", icon: "FileSpreadsheet", color: "from-green-500 to-emerald-600" },
      { name: "Data Cleaning", icon: "Eraser", color: "from-gray-500 to-slate-600" },
      { name: "Data Modeling", icon: "Layers", color: "from-blue-400 to-sky-600" },
    ],
    "Analytics": [
      { name: "KPI Monitoring", icon: "Activity", color: "from-rose-500 to-red-600" },
      { name: "Interactive Reporting", icon: "MousePointer2", color: "from-purple-500 to-violet-600" },
      { name: "Dashboard Visualization", icon: "Layout", color: "from-cyan-400 to-blue-500" },
    ],
  },

  daxCalculations: [
    { name: "Total Patients", code: "COUNTROWS(Patients)", desc: "Calculates the total volume of patient records across the hospital system." },
    { name: "Total Revenue", code: "SUM(Billing[Amount])", desc: "Aggregates total billing revenue from across all departments and services." },
    { name: "Total Expenses", code: "SUM(Operations[Cost])", desc: "Monitors operational costs and departmental expenses in real-time." },
    { name: "Avg Treatment Cost", code: "AVERAGEX(Billing, [Total Revenue] / [Total Patients])", desc: "Determines the average cost efficiency per patient treatment." },
  ],

  impact: [
    "Improved healthcare operational visibility through real-time KPI tracking.",
    "Better financial performance monitoring with granular expense analysis.",
    "Enhanced patient outcome analysis identifying key recovery trend drivers.",
    "Data-driven decision-making support for hospital administrators.",
    "Executive-level reporting capabilities with interactive drill-down features.",
    "Identified key cost optimization opportunities within departmental workflows.",
  ],

  contributions: [
    {
      title: "Power BI Dashboard Development",
      desc: "Designed and developed interactive healthcare ERP dashboards focused on operational analytics and executive reporting.",
    },
    {
      title: "Data Cleaning & Transformation",
      desc: "Implemented Power Query workflows for healthcare dataset cleaning, transformation, and structured reporting.",
    },
    {
      title: "DAX KPI Calculations",
      desc: "Created advanced DAX measures for patient metrics, financial KPIs, operational insights, and business performance analysis.",
    },
    {
      title: "Healthcare Analytics Design",
      desc: "Built modern healthcare visualization systems focused on usability, clarity, and executive-level decision-making.",
    },
    {
      title: "Interactive Reporting System",
      desc: "Developed dynamic filters, slicers, drill-through reporting, and cross-filtering interactions for enhanced analytics exploration.",
    },
  ],

  challenges: [
    "Handling large and fragmented healthcare datasets from multiple sources.",
    "Building optimized DAX calculations for complex healthcare KPIs.",
    "Designing intuitive healthcare dashboards for non-technical stakeholders.",
    "Maintaining clean and meaningful KPI visualizations at scale.",
    "Structuring enterprise reporting workflows to ensure data integrity.",
  ],

  learnings: [
    "Advanced Business Intelligence workflows",
    "Healthcare analytics system architecture",
    "Complex DAX measure development",
    "Enterprise data modeling strategies",
    "Executive dashboard UX design",
  ],

  futureFeatures: [
    { title: "Real-time API Integration", desc: "Connecting directly to live Hospital Management System APIs." },
    { title: "Predictive Analytics", desc: "Using ML models to forecast patient admission trends." },
    { title: "Automated Reporting", desc: "Scheduled executive email reports with AI-generated summaries." },
    { title: "Cloud Deployment", desc: "Scaling the platform to Power BI Service with embedded security." },
  ],
};
