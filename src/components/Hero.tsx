import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-white">
      {/* Background Blocks */}
      <div className="absolute inset-0 grid grid-cols-4 h-full bg-block-gradient"></div>
      
      <div className="text-center px-4 relative z-10">
        {/* Glassy Text Logo */}
        <div
          className="text-7xl sm:text-9xl font-bold animate-fadeInAndGlow mx-auto glassy-text"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {"</div>"}
        </div>
        <p className="text-xl text-gray-100 mt-12 max-w-2xl mx-auto">
          Transform your digital presence with our expert team. We create
          stunning websites and digital solutions that drive exponential growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button className="group flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:bg-gray-900 transition-all hover:scale-105">
            Get Started
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button className="relative border border-gray-200 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 group bg-white">
            View Our Work
            <span className="absolute inset-0 w-full h-full rounded-full transform scale-0 group-hover:scale-100 group-hover:border-2 group-hover:border-black transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
