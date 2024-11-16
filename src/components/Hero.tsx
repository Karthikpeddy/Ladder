import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight mb-8">
          We scale businesses <span className="text-gray-400">digitally</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Transform your digital presence with our expert team. We create stunning websites and digital solutions that drive exponential growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            Start Your Project <ArrowUpRight size={20} />
          </button>
          <button className="border border-gray-200 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
}