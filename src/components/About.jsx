export default function About() {
  return (
      
    <section 
      id="about"

     className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-105 origin-left hover:text-teal-400">
        About <span className="text-teal-400">Me</span>
      </h2>

      <div className="relative border-l-4 border-teal-500 pl-6 sm:pl-8 space-y-10 w-full max-w-3xl">
        {/* Academic Identity */}
        <div className="relative">
          <div className="absolute -left-3 sm:-left-5 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-teal-400 rounded-full animate-pulse"></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-transform duration-300 hover:scale-105 origin-left hover:text-teal-400">
            2022 — Academic Foundation
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Currently a 3rd-year B.Tech CSE student, driven by curiosity and a deep passion for problem-solving through code.
          </p>
        </div>

        {/* Technical Growth */}
        <div className="relative">
          <div className="absolute -left-3 sm:-left-5 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-teal-400 rounded-full animate-pulse"></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-transform duration-300 hover:scale-105 origin-left hover:text-teal-400">
            2023 — Technical Evolution
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Built strong foundations in C++, Java, and Data Structures. Advanced into Web Development with React, Tailwind CSS, and APIs.
          </p>
        </div>

        {/* Projects & Hackathons */}
        <div className="relative">
          <div className="absolute -left-3 sm:-left-5 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-teal-400 rounded-full animate-pulse"></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-transform duration-300 hover:scale-105 origin-left hover:text-teal-400">
            2024 — Projects & Hackathons
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Developed full-stack applications, being a part of hackathon teams, and worked on solutions with real-world impact.
          </p>
        </div>

        {/* Growth Mindset */}
        <div className="relative">
          <div className="absolute -left-3 sm:-left-5 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-teal-400 rounded-full animate-pulse"></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-transform duration-300 hover:scale-105 origin-left hover:text-teal-400">
            Mindset
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            I believe in continuous learning, embracing failures, and growing stronger with each challenge I face.
          </p>
        </div>

        {/* Future Focus */}
        <div className="relative">
          <div className="absolute -left-3 sm:-left-5 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-teal-400 rounded-full animate-pulse"></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 transition-transform duration-300 hover:scale-105 origin-left hover:text-teal-400">
            2025 — What's Next?
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Eager to explore more internships, open-source contributions, and impactful collaborations in the tech space.
          </p>
        </div>

        {/* Final Motivating Line */}
        <div className="pt-8 text-center text-teal-300 text-base sm:text-lg font-medium italic">
          “This journey isn’t about perfection—it’s about progress. Every challenge I’ve faced, from debugging errors to navigating rejections, has only strengthened my resolve to grow as a developer and a professional.”
        </div>
      </div>
    </section>
  );
}