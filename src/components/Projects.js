import React, { useEffect, useRef } from "react";
import { projects } from "../projects";

export default function Projects() {
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="project" className="max-w-3xl mx-auto py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 font-sans">
        projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={project.title}
            className="group opacity-0 translate-y-10 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${index * 100}ms` }}
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <div className="bg-neutral-50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm font-sans leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-sans">
                  <span className="animated-underline">view project</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
