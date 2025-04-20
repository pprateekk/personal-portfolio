import React, { useEffect, useRef } from "react";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen max-w-3xl mx-auto flex items-center justify-center pt-20"
    >
      <div className="max-w-3xl" ref={titleRef}>
        <h1
          className="text-5xl md:text-7xl font-sans font-normal leading-tight mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          hello there, i'm <span className="font-medium">Prateek</span>
        </h1>

        <p
          className="text-lg md:text-lg font-sans font-normal text-neutral-600 mb-12 animate-fade-in opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          a full-stack developer and final-year computer science student.
        </p>

        <div
          className="flex space-x-6 items-center animate-fade-in opacity-0"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <a
            href="https://github.com/pprateekk"
            className="text-gray-500 hover:text-gray-900"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/p-prateek/"
            className="text-gray-500 hover:text-gray-900"
          >
            linkedin
          </a>
          <a
            href="mailto:pprateek@uoguelph.ca"
            className="text-gray-500 hover:text-gray-900"
          >
            email
          </a>

          <span className="h-6 w-px bg-neutral-300 mx-2"></span>

          <a href="#contact" className="btn">
            get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
