export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-black text-white overflow-hidden">

      {/* Top Left Signature */}
      <div className="absolute top-6 left-6 z-50 text-3xl sm:text-4xl font-extrabold tracking-tight font-serif">
        <span className="text-white drop-shadow-md">Avantika</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 animate-text">
          Pandey
        </span>
      </div>

      {/* LEFT: Text Content */}
      <div className="relative w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">

        {/* Background Glow behind text */}
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-teal-400 rounded-full blur-[100px] opacity-20 z-0"></div>

        {/* Floating Emoji */}
       
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif relative z-10">
          Hi, I'm Avantika
        </h1>
        

        <p className="text-base sm:text-lg mb-2 relative z-10">
          Web Dev | DSA | Hackathon Enthusiast
        </p>

        <p className="text-lg text-gray-300 mb-4 italic relative z-10">
          “Turning ideas into real-world impact.”
        </p>

        <p className="text-lg text-gray-300 mb-4 relative z-10">
          Open to opportunities and collaborations — let’s connect!
        </p>

         <a
  href="#contact"
  className="bg-teal-500 hover:bg-teal-400 px-6 py-2 rounded-full text-black font-medium transition duration-300 transform hover:scale-105"
>
  Contact Me
</a>
      </div>

      {/* RIGHT: Image with circular glow */}
      <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
        {/* Teal Glow */}
        <div className="absolute inset-0 bg-teal-300 blur-[120px] opacity-90 rounded-full z-0 animate-pulse"></div>

        {/* Image */}
       <img
  src="/projects/p1.png"
  alt="Avantika"
  className="relative z-10 w-full h-full object-cover rounded-full shadow-lg border-none"
/>
      </div>
    </div>
  );
}