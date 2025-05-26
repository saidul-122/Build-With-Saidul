import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from './ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Food Delivery Application',
      description:
        'A full-stack food ordering app built with the MERN stack featuring user authentication, Stripe payments, order tracking, and a comprehensive admin dashboard.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
      github: 'https://github.com/saidul-122/food-delevary-application',
      demo: 'https://heartfelt-swan-8f77f0.netlify.app/',
      image:
        '/public/Food.png',
      category: 'Food Delivery'
    },
    {
      title: 'Dashboard in HealthCare',
      description:
        'An advanced Clinic Management System for storing and managing patient records, staff data, and appointments efficiently. Automates token generation and centralizes clinic operations digitally.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/saidul-122/DashBoard-in-HealthCare', // Replace with actual link if available
      demo: 'https://clinicmanager.netlify.app/',   // Replace with actual link if available
      image:
        '/public/health.jpg',
      category: 'Healthcare'
    },
    {
      title: 'Jobify Application',
      description:
        'A job tracking platform featuring secure authentication, optimized REST APIs, and a responsive UI with advanced job management tools. Designed with scalability and accessibility in mind.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/saidul-122/Jobify',
      demo: 'https://jobify.live/',
      image:
        '/public/job.avif',
      category: 'Job Management'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-width">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <Eye className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions built with a strong focus on full-stack development, healthcare systems, and job management platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && project.github !== '#' && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-gray-200 hover:border-blue-300 hover:text-blue-600 rounded-xl"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="px-8 py-3 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
