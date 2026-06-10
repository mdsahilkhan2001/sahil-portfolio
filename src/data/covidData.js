export const covidData = {
  id: "covid-detection",
  title: "COVID-19 Radiography Detection System",
  role: "AI/ML Engineer · Deep Learning · Computer Vision",
  subtitle:
    "AI-powered chest X-ray diagnostic platform using CNNs and Grad-CAM explainability to detect COVID-19, Viral Pneumonia, Lung Opacity, and Normal cases with interpretable visualizations.",
  heroDescription:
    "Advanced deep learning system designed to detect COVID-19 and lung-related conditions through intelligent X-ray analysis and explainable AI visualization.",
  github: "https://github.com/mdsahilkhan2001",
  live: "",

  overview: `COVID-19 Radiography Detection System is an AI-powered medical imaging platform designed to classify chest X-ray images into multiple diagnostic categories including COVID-19, Viral Pneumonia, Lung Opacity, and Normal cases.

The system combines deep learning-based CNN architectures with Grad-CAM explainability techniques to provide interpretable AI-assisted diagnostics by visually highlighting regions that influence model predictions.

Built with TensorFlow and integrated with an interactive Gradio interface, the platform focuses on accessibility, visualization, and intelligent medical assistance — making cutting-edge AI diagnostics approachable and trustworthy.`,

  stats: [
    { value: "4", label: "Diagnostic Categories" },
    { value: "CNN", label: "Deep Learning Architecture" },
    { value: "Grad-CAM", label: "Explainability Engine" },
    { value: "Real-time", label: "Prediction Workflow" },
  ],

  features: [
    {
      icon: "🫁",
      title: "AI X-Ray Classification",
      desc: "Multi-class detection covering COVID-19, Viral Pneumonia, Lung Opacity, and Normal chest X-ray cases.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: "🔥",
      title: "Grad-CAM Visualization",
      desc: "Explainable AI heatmaps that visually highlight the diagnostic regions influencing the model's predictions.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: "🖥️",
      title: "Interactive Healthcare UI",
      desc: "Gradio-based interface supporting image upload, webcam input, and real-time diagnostic visualization.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: "🧠",
      title: "Deep Learning Pipeline",
      desc: "CNN-based architecture with TensorFlow integration and optimized image preprocessing workflows.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "📊",
      title: "Medical Visualization System",
      desc: "AI-powered heatmap overlays showing diagnostic focus regions with confidence visualization.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: "📥",
      title: "Export & Result Sharing",
      desc: "Download prediction outputs, save heatmap results, and support offline medical review workflows.",
      color: "from-amber-500 to-yellow-600",
    },
  ],

  techStack: {
    "AI & Machine Learning": [
      { name: "TensorFlow", icon: "Brain", color: "from-orange-500 to-amber-600" },
      { name: "Keras", icon: "Layers", color: "from-red-500 to-rose-600" },
      { name: "CNN Architecture", icon: "Network", color: "from-blue-500 to-indigo-600" },
      { name: "Grad-CAM", icon: "Scan", color: "from-violet-500 to-purple-600" },
    ],
    "Computer Vision": [
      { name: "OpenCV", icon: "Eye", color: "from-cyan-500 to-blue-600" },
      { name: "NumPy", icon: "Grid", color: "from-sky-500 to-cyan-600" },
    ],
    "Interface & Visualization": [
      { name: "Gradio", icon: "Monitor", color: "from-emerald-500 to-teal-600" },
      { name: "Matplotlib", icon: "BarChart", color: "from-teal-500 to-green-600" },
    ],
    "Programming & Tools": [
      { name: "Python", icon: "Code", color: "from-yellow-500 to-amber-600" },
      { name: "Jupyter", icon: "FileCode", color: "from-orange-500 to-red-500" },
    ],
  },

  workflow: [
    { step: "01", label: "X-Ray Upload", desc: "Upload chest X-ray via UI, webcam, or file input", icon: "Upload" },
    { step: "02", label: "Image Preprocessing", desc: "Resize, normalize and augment medical image data", icon: "Filter" },
    { step: "03", label: "CNN Prediction", desc: "Deep learning model classifies across 4 diagnostic categories", icon: "Brain" },
    { step: "04", label: "Grad-CAM Heatmap", desc: "Explainable AI visualizes critical lung regions on X-ray", icon: "Flame" },
    { step: "05", label: "Diagnostic Output", desc: "Display results with confidence scores and visual heatmap", icon: "Activity" },
  ],

  contributions: [
    {
      title: "Deep Learning Model Development",
      desc: "Built CNN-based medical image classification system capable of detecting multiple lung conditions from chest X-rays.",
    },
    {
      title: "Grad-CAM Integration",
      desc: "Implemented explainable AI visualization techniques to highlight diagnostic regions influencing model predictions.",
    },
    {
      title: "Medical Imaging Pipeline",
      desc: "Developed preprocessing and prediction workflows for efficient chest X-ray analysis at scale.",
    },
    {
      title: "Interactive Healthcare Interface",
      desc: "Integrated Gradio-based UI for real-time image uploads, webcam support, and diagnostic visualization.",
    },
    {
      title: "AI Visualization Design",
      desc: "Created medical-friendly AI heatmap presentation system for enhanced interpretability and user understanding.",
    },
  ],

  challenges: [
    "Training CNN models on imbalanced medical imaging datasets",
    "Generating accurate and visually meaningful Grad-CAM heatmaps",
    "Improving model interpretability for non-technical medical users",
    "Managing efficient medical image preprocessing pipelines",
    "Balancing prediction accuracy with real-time visualization clarity",
  ],

  learnings: [
    "Medical AI model workflows",
    "CNN architecture optimization",
    "Explainable AI systems",
    "Healthcare visualization design",
    "Computer vision in diagnostics",
    "Model interpretability techniques",
  ],

  metrics: [
    { value: "4-Class", label: "X-Ray Classification" },
    { value: "Grad-CAM", label: "AI Visualization Engine" },
    { value: "Real-time", label: "Diagnostic Workflow" },
    { value: "Explainable", label: "AI Prediction System" },
    { value: "Gradio", label: "Interactive Interface" },
    { value: "Research", label: "Focused AI Implementation" },
  ],
};
