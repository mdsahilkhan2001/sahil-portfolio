import React, { useState } from "react";
import { projects } from "../../data/siteContent";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Web", "Data Science", "UI/UX", "ML"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter(p => active === "All" || (p.tags || []).includes(active));

  return (
    <section id="projects" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        <div className="flex gap-3 mb-6 flex-wrap">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} className={`px-3 py-1 rounded-full border ${active===f ? 'bg-primary text-white' : 'bg-transparent'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProjectCard p={p} key={p.id} />)}
        </div>
      </div>
    </section>
  );
}
