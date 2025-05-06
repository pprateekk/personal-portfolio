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
          I like building things and figuring them out by doing. If it solves a
          real problem or even just teaches me something new, I'm all in. That's
          how I've learned most of what I know: by hitting roadblocks, fixing
          bugs, and slowly watching things take shape.
          <br /> <br /> Away from the keyboard, I unwind with table tennis, the
          occasional good read, and photography walks.
        </p>
      </div>
    </section>
  );
}
