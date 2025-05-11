import React from "react";
import prateek2 from "../assets/prateek2.png";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto border-t border-neutral-100 py-16"
    >
      <h2 className="text-3xl md:text-4xl mb-12 font-sans font-bold">about</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-2/3 space-y-6 prose prose-neutral max-w-none">
          <p className="text-sm leading-relaxed">
            i like building things and figuring them out by doing. whether it's
            integrating real-time hardware systems, building real-time chat app,
            or developing a CLI tool to audit web accessibility, i throw myself
            into each project, break things and learn as i go. most of what i
            know comes from hitting walls, debugging for hours, and slowly
            seeing things come together.
            <br /> <br /> away from the keyboard, i unwind with table tennis,
            the occasional good read, and photography walks.
            <br />
            <br />
            right now, i'm focussed on full-stack development, working as a Data
            Analyst and learning more about ML and data science.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={prateek2}
            alt="Prateek"
            className="rounded-lg w-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
