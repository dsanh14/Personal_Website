import React from 'react';

'use client';

interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: 'Frontend',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
  },
  {
    title: 'Backend',
    description: 'Node.js, Express, MongoDB, PostgreSQL',
  },
  {
    title: 'Tools',
    description: 'Git, Docker, AWS, VS Code',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-2">My</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="text-lg font-medium">{skill.title}</h4>
                  </div>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 