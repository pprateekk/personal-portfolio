import molecule from "./assets/molecule.jpg";
import sudoku from "./assets/sudoku.png";
import chatapp from "./assets/chatapp.png";
import a11y from "./assets/a11y1.png";
import waterwize from "./assets/waterwize.png";

export const projects = [
  {
    title: "a11y-cli",
    description:
      "a CLI-based tool for automated web accessibility testing, built with axe-core and Puppeteer to ensure WCAG compliance.",
    image: a11y,
    link: "https://github.com/pprateekk/a11y-cli",
  },
  {
    title: "yapsterly",
    description:
      "a full-stack web-based chat application developed using React, Node.js, and Socket.IO for real-time communication.",
    image: chatapp,
    link: "https://github.com/pprateekk/yapsterly",
  },
  {
    title: "water-wize",
    description:
      "a full-stack platform for exploring environmental pollution data through interactive maps, charts, and a RESTful backend.",
    image: waterwize,
    link: "https://github.com/pprateekk/water-wize",
  },
  {
    title: "sudoku-solver-GUI",
    description:
      "this is a backtracking algorithm program that solves a sudoku puzzle. it has both a GUI and a text-based version.",
    image: sudoku,
    link: "https://www.github.com/pprateekk/sudoku-solver-GUI",
  },
  {
    title: "molecule-viewer",
    description:
      "a full-stack application featuring a user-friendly GUI front-end for uploading SDF files and displaying SVG images of molecules.",
    image: molecule,
    link: "https://www.github.com/pprateekk/molecule-viewer",
  },
];
