
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container-width">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Saidul Hoque
          </h3>
          
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Aspiring Software Developer | Building the future, one line of code at a time
          </p>
          
          <div className="flex items-center justify-center gap-3 text-gray-300 mb-8">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-400 fill-current animate-pulse" />
            <span>by Saidul Hoque</span>
          </div>
          
          <div className="pt-8 border-t border-gray-700/50 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Saidul Hoque. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
