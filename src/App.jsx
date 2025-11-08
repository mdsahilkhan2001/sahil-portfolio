 import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import CursorFollower from "./components/ui/CursorFollower";
import './styles/globals.css'
function App() {
  // theme (persisted)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    // prefer dark for system? default light
    return "light";
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
    
  

    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 transition-colors">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Home />
      </main>
      <Footer />
      <CursorFollower />

    </div>
    
    
  );
}

export default App;
