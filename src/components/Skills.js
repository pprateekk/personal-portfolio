import React from "react";
import python from "../assets/icons/python.png";
import cprog from "../assets/icons/cprog.png";
import csharp from "../assets/icons/csharp.png";
import cssimg from "../assets/icons/css.png";
import docker from "../assets/icons/docker.png";
import flask from "../assets/icons/flask.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/githubnew.png";
import html from "../assets/icons/html.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/javascript.png";
import mysql from "../assets/icons/mysql.png";
import net from "../assets/icons/net.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwind.png";

export default function Skills() {
  const skillCategories = [
    {
      title: "languages",
      skills: [
        { name: "Python", icon: python },
        { name: "C", icon: cprog },
        { name: "C#", icon: csharp },
        { name: "Java", icon: java },
        { name: "JavaScript", icon: javascript },
        { name: "HTML", icon: html },
        { name: "CSS", icon: cssimg },
        { name: "SQL", icon: mysql },
      ],
    },
    {
      title: "frameworks & libraries",
      skills: [
        { name: "React", icon: react },
        { name: "Flask", icon: flask },
        { name: ".NET", icon: net },
        { name: "Tailwind", icon: tailwind },
      ],
    },
    {
      title: "tools & platforms",
      skills: [
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Docker", icon: docker },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-6">
          <h3 className="text font-sans">{category.title}</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-md">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <span className="text-xs font-sans ">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
