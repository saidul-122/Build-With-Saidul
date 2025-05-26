import { Button } from './ui/button';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-600">Available for work</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Saidul Hoque
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-semibold text-gray-700 space-y-2">
                <div className="flex items-center gap-3">
                  <span>Full Stack Developer</span>
                  <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                <div className="text-lg font-normal text-gray-600">
                  Building digital experiences with modern technologies
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Passionate and enthusiastic aspiring software developer with a strong foundation in programming. Eager to learn and contribute to web development, mobile applications, and innovative problem-solving.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-3 text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300">
                Let's Talk
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Connect</span>
              <div className="flex gap-4">
                <a href="mailto:developersaidul04@gmail.com" className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Mail size={20} />
                </a>
                <a href="tel:+91 6295470367" className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Phone size={20} />
                </a>
                <a href="https://www.linkedin.com/in/saidul-hoque-767375237/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/saidul-122" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white p-2">
                  <img src="https://i.postimg.cc/0ygLJ1Gg/img.jpg" alt="Md Ahmad Raza" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              
               
               <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
              </div> 
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-lg font-bold">Dev</div>
                  <div className="text-xs opacity-90">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
