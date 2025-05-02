import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto py-24 border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 font-sans">
        experience
      </h2>

      <div className="space-y-12 pt-4">
        {/* <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text font-medium font-sans">
              Data Analyst at University of Guelph
            </h3>
            <span className="text-sm font-mono text-neutral-500">
              May 2025 - Present
            </span>
          </div>
          <ul className="prose prose-neutral max-w-none text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text font-medium font-sans">
              Teaching Assistant at University of Guelph
            </h3>
            <span className="text-sm font-mono text-neutral-500">
              Jan 2025 - Apr 2025
            </span>
          </div>
          <ul className="prose prose-neutral max-w-none text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              Conducted lab sessions for over 50 students, providing instruction
              on C programming concepts such as pointers, memory allocation, and
              data structures.
            </li>
            <li>
              Assisted students during office hours by clarifying lab
              assignments, debugging issues, and reinforcing lecture material.
            </li>
            <li>
              Coordinated with other teaching assistants to align on grading
              rubrics, lab content, and assignment expectations.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text font-medium text-black font-sans">
              Software Developer at MANTECH Inc.
            </h3>
            <span className="text-sm font-mono text-neutral-500">
              Jan 2024 - Aug 2024
            </span>
          </div>
          <ul className="prose prose-neutral max-w-none text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              Mordernized legacy MANTECH Pro system into a modern WPF
              application (BOD Pro) by refactoring components and reengineering
              others using MVVM and dependency injection.
            </li>
            <li>
              Engineered and integrated hardware interfaces for MiniHub,
              Turbidity Meter, and DO Meter, covering digital/analog I/O,
              electrode readings, stirrer speed, and level-sense monitoring.
            </li>
            <li>
              Built dynamic UIs with custom WPF controls, advanced data binding,
              and flexible layouts to support CSV import/export and Single-Run
              test setup.
            </li>
            <li>
              Collaborated with hardware engineers to integrate sensor data and
              troubleshoot issues during testing and integration.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text font-medium font-sans">
              Research Assistant at University of Guelph
            </h3>
            <span className="text-sm font-mono text-neutral-500">
              May 2023 - Sep 2023
            </span>
          </div>
          <ul className="prose prose-neutral max-w-none text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              Designed and implemented a text mining pipeline to process large
              datasets, applying NLP techniques to extract meaningful insights.
            </li>
            <li>
              Applied machine learning algorithms, including clustering and
              topic modeling (LDA, NMF) to analyze student feedback,
              demonstrating NMF's superior topic interpretability with a
              coherence score of 0.42
            </li>
            <li>
              Conducted comprehensive data preprocessing and feature selection,
              improving data quality and reducing dimensionality for better
              model performance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
