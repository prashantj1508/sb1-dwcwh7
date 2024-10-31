import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <GraduationCap className="text-blue-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="space-y-8">
          <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold">Master of Computer Science</h3>
            <p className="text-blue-400">Stanford University</p>
            <p className="text-gray-400">2016 - 2018</p>
            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              <li>Specialized in Artificial Intelligence and Machine Learning</li>
              <li>Graduate Research Assistant in Human-Computer Interaction Lab</li>
              <li>GPA: 3.9/4.0</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-blue-400">MIT</p>
            <p className="text-gray-400">2012 - 2016</p>
            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              <li>Minor in Mathematics</li>
              <li>President of Computer Science Society</li>
              <li>Dean's List: All Semesters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;