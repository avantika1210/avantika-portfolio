export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-16 py-16 bg-black text-white overflow-hidden">

      {/* Top Left Signature */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-serif">
        <span className="text-white drop-shadow-md">Avantika</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 animate-text">
          Pandey
        </span>
      </div>

      {/* LEFT: Text Content */}
      <div className="relative w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">

        {/* Background Glow behind text */}
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-teal-400 rounded-full blur-[100px] opacity-20 z-0"></div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif relative z-10">
          Hi, I'm Avantika
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-2 relative z-10">
          Web Dev | DSA | Hackathon Enthusiast
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 italic relative z-10">
          “Turning ideas into real-world impact.”
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 relative z-10">
          Open to opportunities and collaborations — let’s connect!
        </p>

        <a
          href="#contact"
          className="bg-teal-500 hover:bg-teal-400 px-6 py-2 rounded-full text-black font-medium transition duration-300 transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>

      {/* RIGHT: Image */}
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 mt-8 md:mt-0">
        {/* Teal Glow */}
        <div className="absolute inset-0 bg-teal-300 blur-[120px] opacity-90 rounded-full z-0 animate-pulse"></div>

        {/* Avatar Image */}
        <img
          src="/projects/p1.png"
          alt="Avantika"
          className="relative z-10 w-full h-full object-cover rounded-full shadow-lg border-none"
        />
      </div>
    </div>
  );
}
