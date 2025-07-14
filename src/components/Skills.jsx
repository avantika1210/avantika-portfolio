export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
    
    "Git & GitHub",
    "Canva",
    "Core CS Concepts"
  ];

  return (
    <section className="w-screen h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center px-6 py-10">
      <h2 className="text-6xl font-bold text-center mb-20 tracking-tight">
        My <span className="text-teal-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-teal-400 text-center py-6 px-4 rounded-2xl shadow-md hover:shadow-teal-500/30 transition-all duration-300"
          >
            <span className="text-lg font-semibold tracking-wide text-gray-200 hover:text-teal-400">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}