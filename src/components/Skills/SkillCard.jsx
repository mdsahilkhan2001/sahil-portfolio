 import React, { useState } from 'react';

// Skills data with correct public folder paths
const skills = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Next.js", icon: "/icons/nextjs.jpeg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
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
  { name: "Data Science", icon: "/icons/ds.png" },
  // New Graphic Design Tools
  { name: "Canva", icon: "/icons/canva.png" },
  { name: "Photoshop", icon: "/icons/photoshop.png" },
  { name: "Illustrator", icon: "/icons/illustrator.png" },
];

function SkillCard({ skill, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const skillLevels = {
    "React": 90,
    "Node.js": 85,
    "Next.js": 88,
    "Tailwind CSS": 92,
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
    "Data Science": 72,
    // Graphic Design Tools
    "Canva": 88,
    "Photoshop": 82,
    "Illustrator": 80,
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
      "Data Science": {
        gradient: "from-indigo-500 to-purple-500",
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800",
        shadow: "shadow-indigo-500/25"
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
      },
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

  return (
    <div
      className={`group relative transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
        isHovered ? 'z-10' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
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

// Demo component showing all skills
export default function SkillsDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Enhanced Skills Showcase
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Interactive skill cards with graphic design tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
