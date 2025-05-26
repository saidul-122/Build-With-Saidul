'use client';

import { Calendar, MapPin, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
  }),
};

const About = () => {
  const skills = {
    Languages: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python'],
    Libraries: ['React', 'Redux', 'Node.js', 'Express.js'],
    Technologies: ['MongoDB', 'Firebase', 'Git', 'HTML5', 'CSS3'],
    Tools: ['VS Code', 'Postman', 'GitHub']
  };

  const education = [
    {
      degree: 'BTech Computer Science',
      institution: 'Maulana Abul Kalam Azad University Of Technology',
      period: '2021 – Present',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Akondabaria SC High School',
      period: '2019 – 2021',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        {/* Title */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Passionate Developer with a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth Mindset
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to creating innovative solutions and continuously expanding my technical expertise
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Journey */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  I'm a dedicated software developer with over 1 years of programming experience, 
                  currently pursuing my BTech in Computer Science. My journey in technology began 
                  with electronics engineering, which gave me a strong foundation in problem-solving 
                  and analytical thinking.
                </p>
                <p>
                  Currently working as a Software Developer intern at Extroworks Private Limited, I've had the 
                  opportunity to work on real-world projects and collaborate with experienced developers. 
                  I'm passionate about web development, mobile app development, and exploring new 
                  technologies that can make a positive impact.
                </p>
              </div>
            </div>

            {/* Role & Location Cards */}
            <div className="space-y-4">
              <motion.div
                variants={fadeIn}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Current Role</div>
                  <div className="text-gray-600">Software Developer Intern at Extroworks Private Limited</div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Based in India</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-gray-700 font-medium mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="animate-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for building scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {category}
                </h4>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white px-4 py-2 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
