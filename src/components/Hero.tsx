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
          {/* View Our Work Button */}
          <button className="relative flex items-center justify-center view-work-btn">
  <svg viewBox="0 0 180 60">
    <rect x="0" y="0" width="180" height="60" rx="30" ry="30"></rect>
  </svg>
  <span>View Our Work</span>
</button>
        </div>
      </div>
    </div>
  );
}
