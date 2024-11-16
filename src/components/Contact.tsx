import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's create something amazing together</h2>
            <p className="text-gray-400 mb-8">
              Ready to take your business to the next level? We're here to help you achieve exponential growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <a href="mailto:hello@ladder.agency" className="hover:text-gray-300">hello@ladder.agency</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400" />
                <a href="tel:+1234567890" className="hover:text-gray-300">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              ></textarea>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Send Message <ArrowUpRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}