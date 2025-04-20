import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        "home",
        "about",
        "experience",
        "coop",
        "project",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10  p-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-sans text-lg tracking-tight">
          prateek
        </a>
        <ul className="flex space-x-8 font-sans text-sm">
          {["home", "about", "experience", "coop", "projects", "contact"].map(
            (item) => {
              const link = item.toLowerCase();
              const isActive =
                activeSection === (link === "projects" ? "project" : link);

              return (
                <li key={link}>
                  <a
                    href={`#${link === "projects" ? "project" : link}`}
                    className={`relative pb-1 transition-colors ${
                      isActive
                        ? "text-black"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-px bg-black" />
                    )}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
