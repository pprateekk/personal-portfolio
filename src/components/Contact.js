import React, { useState } from "react";
import axios from "axios";
import githubimg from "../assets/icons/github.png";
import linkedin from "../assets/icons/link.png";
import email from "../assets/icons/email2.png";
import call from "../assets/icons/call.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://getform.io/f/1aa8f7a0-f1b0-43ea-8183-2ef7e669985e",
        formData
      );

      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error sending the form data:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto py-24 border-t border-neutral-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sans">
            get in touch
          </h2>

          <p className="text-neutral-600 mb-12 max-w-md">
            feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100">
                <img src={email} alt="email" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-bold text-neutral-500">
                  email
                </h3>
                <a
                  href="mailto:pprateek@uoguelph.ca"
                  className="text-sm font-sans hover:text-neutral-600"
                >
                  pprateek@uoguelph.ca
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100">
                <img src={call} alt="phone" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-bold text-neutral-500">
                  phone
                </h3>
                <p className="text-sm  font-sans">+1 (519)-731-3907</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100">
                <img src={linkedin} alt="linkedin" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-bold text-neutral-500">
                  linkedin
                </h3>
                <a
                  href="https://www.linkedin.com/in/p-prateek/"
                  className="text-sm  font-sans hover:text-neutral-600"
                >
                  linkedin.com/in/p-prateek
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100">
                <img src={githubimg} alt="github" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-sans font-bold text-neutral-500">
                  github
                </h3>
                <a
                  href="https://github.com/pprateekk"
                  className="text-sm font-sans hover:text-neutral-600"
                >
                  github.com/pprateekk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold tracking-wide font-mono text-neutral-500 mb-2"
              >
                name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-100 p-4 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold tracking-wide font-mono text-neutral-500 mb-2"
              >
                email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-100 p-4 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold tracking-wide font-mono text-neutral-500 mb-2"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-neutral-100 p-4 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-full"
            >
              {isSubmitting ? "sending..." : "send message"}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 text-green-700 text-sm">
                your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 text-red-700 text-sm">
                there was an error sending your message. please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
