import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 2,
      title: "How a Lecture Slide Got Me Thinking About Accessibility",
      date: "May 10, 2025",
      summary:
        "How a university UI class got me curious about accessibility and led me to build my own CLI tool to audit web pages from the terminal.",
      tags: ["Accessibility", "NodeJS", "axe-core", "CI/CD"],
      url: "https://medium.com/@pprateek1204/how-a-lecture-slide-got-me-thinking-about-accessibility-e1901959bc7f",
    },
    {
      id: 1,
      title:
        "My First Research Paper: How I Used Text Mining to Make Sense of Student Feedback",
      date: "May 1, 2025",
      summary:
        "This started as a research assistant gig and turned into one of the best learning experiences I’ve had.",
      tags: ["Research Experience", "ML", "NLP"],
      url: "https://medium.com/@pprateek1204/my-first-research-paper-how-i-used-text-mining-to-make-sense-of-student-feedback-79a3504d3034",
    },
  ];

  return (
    <section
      id="blog"
      className="max-w-3xl mx-auto border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl mb-12 font-sans font-bold">blog</h2>

      <div className="space-y-8">
        {blogs.map((blog) => (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            key={blog.id}
            className="block"
          >
            <article className="project-card hover:cursor-pointer">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium mr-4 flex-1">
                    {blog.title}
                  </h3>
                  <span className="text-sm text-neutral-500 whitespace-nowrap mt-1">
                    {blog.date}
                  </span>
                </div>

                <p className="text-neutral-600 mb-4">{blog.summary}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-neutral-100 px-2 py-1 text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <span className="animated-underline text-sm font-medium">
                    Read more
                  </span>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
