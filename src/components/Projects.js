import React, { useState, useEffect } from "react";
import { projects } from "../projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNextProject();
      if (e.key === "ArrowLeft") goToPrevProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  const currentProject = projects[currentIndex];

  return (
    <section
      id="project"
      className="max-w-3xl mx-auto py-24 border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 font-sans">
        projects
      </h2>

      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${currentProject.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <button
            onClick={goToPrevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 text-black transition-all duration-300 focus:outline-none shadow-md"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 text-black transition-all duration-300 focus:outline-none shadow-md"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="p-8 transition-all duration-500">
          {/* project dots*/}
          <div className="flex justify-center space-x-2 mb-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-black scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center font-sans">
            {currentProject.title}
          </h3>

          <p className="text-neutral-700 leading-relaxed mb-6 text-center">
            {currentProject.description}
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href={currentProject.link}
              className="flex items-center space-x-2 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded transition-all duration-300 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Project</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </a>

            {currentProject.github && (
              <a
                href={currentProject.github}
                className="flex items-center space-x-2 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded transition-all duration-300 shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
