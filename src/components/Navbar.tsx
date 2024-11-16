import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-900">Ladder</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Let's Talk <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600">Services</a>
            <a href="#work" className="block px-3 py-2 text-gray-600">Work</a>
            <a href="#process" className="block px-3 py-2 text-gray-600">Process</a>
            <button className="w-full mt-2 bg-black text-white px-6 py-2 rounded-full flex items-center justify-center gap-2">
              Let's Talk <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}