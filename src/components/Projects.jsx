export default function Projects() {
  const projects = [
    {
      title: "AstraFem",
      description:
        "A women-first AI-powered platform for rural empowerment. Features bilingual support, voice assistant, and visual storytelling.",
      tech: "React, Tailwind, Lottie, Speech Recognition",
      image: "/projects/astrafem.jpeg",
    },
    {
      title: "Ochi Animated Website",
      description:
        "A visually rich animated clone of Ochi portfolio using Framer Motion & sleek transitions.",
      tech: "React, Tailwind, Framer Motion",
      image: "/projects/ochi.jpeg",
    },
    {
      title: "College Complaint Portal",
      description:
        "A centralized platform for students of my college to lodge and track complaints efficiently.",
      tech: "HTML, CSS, JavaScript",
      image: "/projects/complaint.jpeg",
    },
    {
      title: "NFA to DFA Visualizer",
      description:
        "An educational tool for visualizing automata theory transitions.",
      tech: "HTML, CSS, JavaScript",
      image: "/projects/nfa.jpg",
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight hover:text-teal-400 transition duration-300">
        My <span className="text-teal-400">Projects</span>
      </h2>

      {/* Scrollable Card Container with hover group */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-2 group">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[350px] max-w-[400px] bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out 
                blur-sm opacity-40 group-hover:blur-sm group-hover:opacity-60 
                hover:blur-none hover:opacity-100 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[180px] sm:h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold text-teal-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-2 text-sm">
                  {project.description}
                </p>
                <p className="text-xs text-gray-400 italic">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}