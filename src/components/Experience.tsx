'use client';

import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const experiences = [
  {
    title: 'Front End Developer',
    company: 'ExtroWorks Pvt Ltd',
    duration: 'Sep–Nov 2024',
    points: [
      'Built scalable Next.js applications with optimized performance',
      'Improved application performance by 65%',
      'Developed reusable UI components for faster development',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Ampius Technology',
    duration: 'May–Sep 2023',
    points: [
      'Full-stack development with Django and React',
      'Designed and implemented RESTful APIs',
      'Optimized database queries for better performance',
    ],
  },
  {
    title: 'Front End Developer',
    company: 'Oasis Infobyte',
    duration: 'Feb–Apr 2023',
    points: [
      'Created reusable UI components for various projects',
      'Implemented performance optimizations',
      'Collaborated with design team for better user experience',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
     <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
  Experience
</h2>


      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-500 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              } relative`}
            >
              {/* Left Side */}
              {isLeft && (
                <div className="md:w-1/2 md:pr-8">
                  <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-sm text-blue-600 mb-2">
                      {exp.company} | {exp.duration}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full border-4 border-blue-500 w-5 h-5"></div>

              {/* Right Side */}
              {!isLeft && (
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-sm text-blue-600 mb-2">
                      {exp.company} | {exp.duration}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
