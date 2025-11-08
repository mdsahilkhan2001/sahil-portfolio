 import React, { useState, useEffect, useRef } from 'react';

// Skills data with Graphic Design Tools added
const skills = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Next.js", icon: "/icons/nextjs.jpeg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
  { name: "DSA", icon: "/icons/Dsa.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "JavaScript", icon: "/icons/js.jpeg" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "HTML", icon: "/icons/html.jpeg" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Power BI", icon: "/icons/powerbi.jpeg" },
  { name: "Tableau", icon: "/icons/tableou.png" },
  { name: "Excel", icon: "/icons/excel.jpeg" },
  { name: "Machine Learning", icon: "/icons/ml.png" },
  // Graphic Design Tools
  { name: "Canva", icon: "/icons/canva.png" },
  { name: "Photoshop", icon: "/icons/photoshop.png" },
  { name: "Illustrator", icon: "/icons/illustrator.png" }
];

// Enhanced SkillCard Component
function SkillCard({ skill, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const skillLevels = {
    "React": 90,
    "Node.js": 85,
    "Next.js": 88,
    "Tailwind CSS": 92,
    "DSA": 90,
    "Python": 80,
    "MongoDB": 85,
    "SQL": 78,
    "Express": 82,
    "JavaScript": 88,
    "TypeScript": 82,
    "HTML": 95,
    "CSS": 90,
    "Power BI": 75,
    "Tableau": 78,
    "Excel": 85,
    "Machine Learning": 70,
    // Graphic Design Tools
    "Canva": 88,
    "Photoshop": 82,
    "Illustrator": 80
  };

  const proficiency = skillLevels[skill.name] || 75;

  const getSkillClasses = (skillName) => {
    const classMap = {
      "React": {
        gradient: "from-blue-400 to-cyan-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        shadow: "shadow-blue-500/25"
      },
      "Node.js": {
        gradient: "from-green-400 to-emerald-400",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800",
        shadow: "shadow-green-500/25"
      },
      "Next.js": {
        gradient: "from-gray-700 to-gray-900",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800",
        shadow: "shadow-gray-500/25"
      },
      "Tailwind CSS": {
        gradient: "from-teal-400 to-blue-400",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-200 dark:border-teal-800",
        shadow: "shadow-teal-500/25"
      },
      "DSA": {
        gradient: "from-indigo-500 to-purple-600",
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800",
        shadow: "shadow-indigo-500/25"
      },
      "Python": {
        gradient: "from-yellow-400 to-orange-400",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800",
        shadow: "shadow-yellow-500/25"
      },
      "MongoDB": {
        gradient: "from-green-600 to-green-800",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800",
        shadow: "shadow-green-500/25"
      },
      "SQL": {
        gradient: "from-blue-600 to-indigo-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        shadow: "shadow-blue-500/25"
      },
      "Express": {
        gradient: "from-gray-600 to-gray-800",
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800",
        shadow: "shadow-gray-500/25"
      },
      "JavaScript": {
        gradient: "from-yellow-300 to-yellow-500",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800",
        shadow: "shadow-yellow-500/25"
      },
      "TypeScript": {
        gradient: "from-blue-500 to-blue-700",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        shadow: "shadow-blue-500/25"
      },
      "HTML": {
        gradient: "from-orange-400 to-red-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-800",
        shadow: "shadow-orange-500/25"
      },
      "CSS": {
        gradient: "from-blue-400 to-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        shadow: "shadow-blue-500/25"
      },
      "Power BI": {
        gradient: "from-yellow-500 to-orange-500",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800",
        shadow: "shadow-yellow-500/25"
      },
      "Tableau": {
        gradient: "from-blue-500 to-blue-700",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        shadow: "shadow-blue-500/25"
      },
      "Excel": {
        gradient: "from-green-500 to-green-700",
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800",
        shadow: "shadow-green-500/25"
      },
      "Machine Learning": {
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        shadow: "shadow-purple-500/25"
      },
      // Graphic Design Tools with Official Brand Colors
      "Canva": {
        gradient: "from-purple-500 via-blue-500 to-cyan-400",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        shadow: "shadow-purple-500/25"
      },
      "Photoshop": {
        gradient: "from-blue-900 via-blue-600 to-blue-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-300 dark:border-blue-700",
        shadow: "shadow-blue-600/25"
      },
      "Illustrator": {
        gradient: "from-orange-500 via-amber-500 to-yellow-400",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-800",
        shadow: "shadow-orange-500/25"
      }
    };
    
    return classMap[skillName] || {
      gradient: "from-purple-400 to-pink-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
      shadow: "shadow-purple-500/25"
    };
  };

  const skillClasses = getSkillClasses(skill.name);

  const getExperienceLevel = (proficiency) => {
    if (proficiency >= 90) return "🚀 Expert";
    if (proficiency >= 80) return "⚡ Advanced";
    if (proficiency >= 70) return "🎯 Intermediate";
    return "📚 Learning";
  };

  const getStarRating = (proficiency) => {
    return Math.round(proficiency / 20);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${
        isHovered ? 'scale-105 -translate-y-2 z-10' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced glow effect */}
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${skillClasses.gradient} transition-all duration-300 ${
          isHovered ? 'opacity-60 blur-lg scale-105' : 'opacity-0 blur-sm scale-95'
        }`}
      />

      {/* Secondary glow */}
      <div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${skillClasses.gradient} transition-all duration-200 ${
          isHovered ? 'opacity-40 blur-sm' : 'opacity-0'
        }`}
      />

      {/* Main card */}
      <div 
        className={`relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-6 rounded-2xl border ${skillClasses.border} overflow-hidden transition-all duration-300 ${
          isHovered 
            ? `shadow-2xl ${skillClasses.shadow}` 
            : 'shadow-lg hover:shadow-xl'
        }`}
      >
        {/* Animated background pattern */}
        <div 
          className={`absolute inset-0 opacity-5 transition-all duration-600 ${
            isHovered ? 'opacity-10' : ''
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: isHovered ? '40px 40px' : '0px 0px',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon and name */}
          <div className="flex items-center gap-4 mb-4">
            <div 
              className={`relative transition-all duration-300 ${
                isHovered ? 'scale-105 rotate-3' : ''
              }`}
            >
              {/* Icon container with enhanced gradient border */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skillClasses.gradient} p-0.5 shadow-lg transition-all duration-300 ${
                  isHovered ? 'shadow-2xl scale-105' : ''
                }`}
              >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  {!imageError && skill.icon ? (
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} logo`}
                      className={`w-9 h-9 object-contain transition-all duration-200 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                      onError={() => setImageError(true)}
                      loading="lazy"
                    />
                  ) : (
                    <div 
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${skillClasses.gradient} flex items-center justify-center text-white font-bold text-sm transition-all duration-200 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                    >
                      {skill.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced floating particles */}
              {isHovered && (
                <>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                  <div className="absolute -top-2 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute top-0 -left-1 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                </>
              )}
            </div>

            <div className="flex-1">
              <h3 
                className={`font-bold text-lg ${skillClasses.text} transition-all duration-300 ${
                  isHovered ? 'scale-105 translate-x-1' : ''
                }`}
              >
                {skill.name}
              </h3>
              
              {/* Enhanced skill level indicator */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${skillClasses.gradient} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${proficiency}%`,
                      animationDelay: `${0.3 + (index * 0.15)}s`,
                    }}
                  >
                    {/* Animated shine effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 ${
                        isHovered ? 'translate-x-full' : '-translate-x-full'
                      }`}
                      style={{
                        animationDelay: `${1 + (index * 0.15)}s`,
                      }}
                    />
                  </div>
                </div>
                <span 
                  className={`text-sm font-bold ${skillClasses.text} tabular-nums transition-all duration-300`}
                  style={{
                    animationDelay: `${1.2 + (index * 0.1)}s`,
                  }}
                >
                  {proficiency}%
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced experience level badge and stars */}
          <div 
            className="flex items-center justify-between transition-all duration-300"
            style={{
              animationDelay: `${0.6 + (index * 0.08)}s`,
            }}
          >
            <div 
              className={`px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${skillClasses.gradient} text-white shadow-lg transition-all duration-200 ${
                isHovered ? 'scale-110 -translate-y-1 shadow-2xl' : ''
              }`}
            >
              {getExperienceLevel(proficiency)}
            </div>
            
            {/* Enhanced interactive stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`text-lg cursor-pointer transition-all duration-200 ${
                    star <= getStarRating(proficiency) 
                      ? "text-yellow-400 hover:scale-125" 
                      : "text-gray-300 dark:text-gray-600 hover:scale-110"
                  } ${
                    isHovered && star <= getStarRating(proficiency) 
                      ? 'animate-pulse scale-110' 
                      : ''
                  }`}
                  style={{
                    animationDelay: `${star * 0.1}s`,
                  }}
                  aria-label={`${star} star${star > 1 ? 's' : ''}`}
                >
                  ★
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced hover overlay effect */}
          <div
            className={`absolute inset-0 rounded-2xl ${skillClasses.bg} transition-all duration-300 ${
              isHovered ? 'opacity-10 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

// Enhanced SkillsGrid Component with filtering including Design category
export default function SkillsGrid() {
  const [filter, setFilter] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  // Enhanced categorization with Design category added
  const skillCategories = {
    all: skills,
    frontend: skills.filter(skill => 
      ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript"].includes(skill.name)
    ),
    backend: skills.filter(skill => 
      ["Node.js", "Express", "MongoDB", "SQL"].includes(skill.name)
    ),
    languages: skills.filter(skill => 
      ["Python", "JavaScript", "TypeScript", "DSA"].includes(skill.name)
    ),
    tools: skills.filter(skill => 
      ["Power BI", "Tableau", "Excel", "Machine Learning"].includes(skill.name)
    ),
    design: skills.filter(skill => 
      ["Canva", "Photoshop", "Illustrator"].includes(skill.name)
    )
  };

  useEffect(() => {
    setFilteredSkills(skillCategories[filter] || skills);
  }, [filter]);

  // Intersection Observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-br from-gray-50/60 via-white to-blue-50/40 dark:from-gray-900/60 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden" 
      ref={ref}
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-800 ${
            isInView ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <h2 
            id="skills-heading"
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-800 delay-200 ${
              isInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Skills & Technologies
            </span>
          </h2>
          <p 
            className={`text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-400 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Technologies I work with to bring innovative ideas to life
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-800 delay-600 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          role="tablist"
          aria-label="Skill categories filter"
        >
          {Object.keys(skillCategories).map((category, idx) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              role="tab"
              aria-selected={filter === category}
              aria-controls="skills-grid"
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-400 transform hover:scale-105 hover:-translate-y-1 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg backdrop-blur-sm"
              }`}
              style={{
                animationDelay: `${0.8 + (idx * 0.1)}s`,
              }}
            >
              <span className="capitalize font-bold">
                {category === "all" ? "All Skills" : category}
              </span>
              <span className="ml-3 text-sm opacity-80 bg-white/20 px-2 py-0.5 rounded-full">
                {skillCategories[category].length}
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced Skills Grid */}
        <div 
          id="skills-grid"
          role="tabpanel"
          aria-labelledby="skills-heading"
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-500 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          key={filter}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard 
              key={`${skill.name}-${filter}`}
              skill={skill} 
              index={index} 
            />
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div 
          className={`mt-20 text-center transition-all duration-800 delay-1000 ${
            isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
          }`}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            {[
              { value: filteredSkills.length, label: "Skills", color: "text-blue-600", icon: "🎯" },
              { value: "3+", label: "Years", color: "text-purple-600", icon: "⏱️" },
              { value: "∞", label: "Learning", color: "text-pink-600", icon: "🚀" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="text-center transition-all duration-200 hover:scale-110 hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-3xl mb-1" role="img" aria-label={stat.label}>{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r filter blur-3xl animate-pulse ${
              i % 3 === 0 ? 'from-blue-400/10 to-purple-400/10' :
              i % 3 === 1 ? 'from-pink-400/10 to-red-400/10' :
              'from-teal-400/10 to-cyan-400/10'
            }`}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
