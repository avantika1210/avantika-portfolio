import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 sm:px-10 py-20 font-poppins"
    >
      <div className="w-full max-w-5xl text-center">

        {/* Heading with hover effect */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-20 group inline-block transition duration-300">
          <span className="drop-shadow-md group-hover:text-teal-400 transition duration-300">
            Contact
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 animate-text">
            Me
          </span>
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Have a project in mind or just want to connect? I’m always open to
          discussions, collaborations, or freelance opportunities!
        </p>

        {/* Email Button */}
        <div className="mb-6">
          <a
            href="mailto:avantika2004pandey@gmail.com"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-full text-lg transition duration-300"
          >
            Say Hello ✉️
          </a>
        </div>

        {/* Resume Download */}
        <div className="mb-10">
          <a
            href="/Avantika_Resume.pdf"
            download
            className="inline-block bg-gray-800 hover:bg-teal-500 text-white px-8 py-3 rounded-full text-lg transition duration-300"
          >
            Download Resume 📄
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 text-3xl mb-10">
          <a
            href="mailto:avantika2004pandey@gmail.com"
            className="hover:text-teal-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/avantika1210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/avantika-pandey-7b9630302/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-500">
          © {new Date().getFullYear()} Avantika Pandey. All rights reserved.
        </footer>
      </div>
    </section>
  );
}