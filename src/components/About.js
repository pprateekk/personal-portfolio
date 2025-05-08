import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl mb-12 font-sans font-bold">about</h2>

      <div className="space-y-6 pt-4 prose prose-neutral max-w-none">
        <p className="text-sm leading-relaxed">
          I like building things and figuring them out by doing. Whether it's
          integrating real-time hardware systems, building real-time chat app,
          or developing a CLI tool to audit web accessibility, I throw myself
          into each project, break things and learn as I go. Most of what I know
          comes from hitting walls, debugging for hours, and slowly seeing
          things come together.
          <br /> <br /> Away from the keyboard, I unwind with table tennis, the
          occasional good read, and photography walks.
          <br />
          <br />
          Right now, I'm focussed on full-stack development, working as a Data
          Analyst and learning more about ML and data science.
        </p>
      </div>
    </section>
  );
}
