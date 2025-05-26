
import { Code, Smartphone, Globe, Database, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Creating responsive, modern websites using React, JavaScript, and the latest web technologies.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'SEO Friendly'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile applications using Flutter and modern development frameworks.',
      features: ['Cross-Platform', 'Native Performance', 'User-Friendly Interface', 'App Store Ready'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Developing robust backend systems with Node.js, MongoDB, and cloud services like Firebase.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security Implementation'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Analytical approach to complex technical challenges with innovative and efficient solutions.',
      features: ['Algorithm Design', 'Code Optimization', 'System Architecture', 'Technical Consulting'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">What I Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software development services with a focus on modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-12 rounded-3xl text-white text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Users className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with modern, efficient, and scalable solutions.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                Let's Work Together
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
