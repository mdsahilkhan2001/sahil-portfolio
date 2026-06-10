import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AicasProjectPage from "./pages/AicasProjectPage";
import DiscussProjectPage from "./pages/DiscussProjectPage";
import AiInterviewProjectPage from "./pages/AiInterviewProjectPage";
import F1StreetwearProjectPage from "./pages/F1StreetwearProjectPage";
import MovieProjectPage from "./pages/MovieProjectPage";
import SkincareProjectPage from "./pages/SkincareProjectPage";
import CovidProjectPage from "./pages/CovidProjectPage";
import HospitalAnalyticsProjectPage from "./pages/HospitalAnalyticsProjectPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import './styles/globals.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 transition-colors">
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/prime-apparel" element={<ProjectDetailPage />} />
            <Route path="/project/erp-lms" element={<AicasProjectPage />} />
            <Route path="/project/community-platform" element={<DiscussProjectPage />} />
            <Route path="/project/ai-interview" element={<AiInterviewProjectPage />} />
            <Route path="/project/f1" element={<F1StreetwearProjectPage />} />
            <Route path="/project/movie" element={<MovieProjectPage />} />
            <Route path="/project/SkinCare" element={<SkincareProjectPage />} />
            <Route path="/project/covid-detection" element={<CovidProjectPage />} />
            <Route path="/project/hospital-analytics" element={<HospitalAnalyticsProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
