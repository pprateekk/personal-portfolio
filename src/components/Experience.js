import React, { useState } from "react";

export default function Experience() {
  const [activeSection, setActiveSection] = useState("teaching");

  const experienceData = [
    {
      id: "analyst",
      label: "data analyst",
      period: "May 2025 - Present",
      title: "Data Analyst @ University of Guelph",
      details: [
        "Contributing to the development of internal data tools and dashboards using Python and Tableau to enhance decision-making for program stakeholders",
        "Collaborating with cross-functional teams to define data requirements and prepare datasets for analysis and visualization",
      ],
    },
    {
      id: "software",
      label: "software developer",
      period: "Jan 2024 - Aug 2024",
      title: "Software Developer @ MANTECH INC.",
      details: [
        "Refactored legacy UI logic into a modular, component-based system, increasing maintainability across the lab automation platform.",
        "Developed and integrated real-time hardware data streams (e.g., MiniHub, Turbidity Meter) using C#, boosting device stability and UX.",
        "Built full-stack features for configuration templates, including undo/redo, CSV import/export, and template versioning for tracking and rolling back changes.",
        "Collaborated with hardware engineers to integrate sensor data and troubleshoot issues during testing and integration.",
      ],
    },
    {
      id: "research",
      label: "research assistant",
      period: "May 2023 - Sep 2023",
      title: "Research Assistant @ University of Guelph",
      details: [
        "Designed and implemented a text mining pipeline using NLP techniques to extract insights from large student feedback datasets.",
        "Applied ML algorithms (clustering, LDA, NMF), showing NMF’s superior topic interpretability with a coherence score of 0.42",
        "Performed data preprocessing and feature selection, improving data quality and reducing dimensionality for better model performance.",
        "Co-authored a peer-reviewed paper published in Lecture Notes in Computer Science (Springer): 'Integrative Mining Pipeline for Improved Reflections of Course Feedback,' iiWAS 2024",
      ],
    },
    {
      id: "teaching",
      label: "teaching assistant",
      period: "Sep 2022 - Apr 2023",
      title: "Teaching Assistant @ University of Guelph",
      details: [
        "Conducted lab sessions for over 50 students, providing instruction on C programming concepts such as pointers, memory allocation, and data structures.",
        "Assisted students during office hours by clarifying lab assignments, debugging issues, and reinforcing lecture material.",
        "Coordinated with other teaching assistants to align on grading rubrics, lab content, and assignment expectations.",
      ],
    },
  ];

  const renderContent = () => {
    const activeExperience = experienceData.find(
      (exp) => exp.id === activeSection
    );

    return (
      <div className="pt-4">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text font-medium font-sans">
              {activeExperience.title}
            </h3>
            <span className="text-sm font-mono text-neutral-500">
              {activeExperience.period}
            </span>
          </div>
          <ul className="prose prose-neutral max-w-none text-sm leading-relaxed space-y-2 list-disc pl-5">
            {activeExperience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl mb-12 font-sans font-bold">
        experience
      </h2>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/4">
          <div className="sticky top-24">
            <nav className="space-y-2">
              {experienceData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`block text-left w-full px-4 py-2 transition-all duration-300 border-l-2 ${
                    activeSection === item.id
                      ? "border-black text-black font-medium"
                      : "border-transparent text-neutral-500 hover:text-black hover:border-neutral-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="w-full md:w-2/3">{renderContent()}</div>
      </div>
    </section>
  );
}
