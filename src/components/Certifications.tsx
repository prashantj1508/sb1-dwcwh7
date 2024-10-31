import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Award className="text-blue-400" />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Project Management Professional',
              issuer: 'Amazon Web Services',
              date: '2023',
              credentialId: 'AWS-123456',
            },
            {
              title: ' 	ITIL V3 Certification ',
              issuer: 'Google',
              date: '2022',
              credentialId: 'GCP-789012',
            },
            {
              title: 'Meta Frontend Developer',
              issuer: 'Meta',
              date: '2023',
              credentialId: 'MFE-345678',
            },
            {
              title: 'Docker Certified Associate',
              issuer: 'Docker',
              date: '2022',
              credentialId: 'DCA-901234',
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-blue-400">{cert.issuer}</p>
              <p className="text-gray-400">Issued: {cert.date}</p>
              <p className="text-gray-500 text-sm mt-2">
                Credential ID: {cert.credentialId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
