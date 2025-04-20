import React, { useState } from "react";
import Skills from "./Skills";

export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  const aboutContent = (
    <div className="space-y-6 pt-4 prose prose-neutral max-w-none">
      <p className="text-sm leading-relaxed">
        I enjoy building things that doesn’t fall apart when new features are
        added. My goal is to create meaningful software—whether it’s making the
        web more accessible or solving problems in ways that just feel right. My
        experience covers a broad range of projects: accessibility tools built
        with Node.js and Puppeteer, desktop applications using C# and .NET, and
        real-time chat platforms leveraging Socket.io, MongoDB, and JWT-based
        authentication. <br />
        <br />
        Curiosity drives much of my work—sometimes it’s for a specific project,
        sometimes for research, and often simply for the joy of learning. This
        curiosity led me into natural language processing, where I co-authored a
        published paper on text mining. <br />
        <br />
        Away from the keyboard, I unwind with table tennis, the occasional good
        read, and photography walks.
      </p>
    </div>
  );

  const skillsContent = (
    <div className="pt-4">
      <Skills />
    </div>
  );

  return (
    <section
      id="about"
      className="max-w-3xl mx-auto border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl mb-12 font-sans font-bold">about</h2>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <div className="sticky top-24">
            <nav className="space-y-2">
              {[
                { id: "about", label: "about me" },
                { id: "skills", label: "skills" },
              ].map((item) => (
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

        <div className="w-full md:w-2/3">
          {activeSection === "about" ? aboutContent : skillsContent}
        </div>
      </div>
    </section>
  );
}
