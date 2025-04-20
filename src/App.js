import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CoopPage from "./components/Coop";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // update the scroll bar progress
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="bg-white text-neutral-800">
      <div
        className="fixed top-0 left-0 h-0.5 bg-black z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />

      <div className="max-w-4xl mx-auto px-6 relative">
        <Home />
        <About />
        <Experience />
        <CoopPage />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
