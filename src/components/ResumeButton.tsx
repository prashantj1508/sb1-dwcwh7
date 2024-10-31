import React from 'react';
import { FileDown } from 'lucide-react';

const ResumeButton = () => {
  const resumeUrl = "https://docs.google.com/document/d/1tsnxhVaamwA5TjEw-ZVmvJfOc4bOk-c99JxIBdJBUnE/edit?usp=drive_link";

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white font-medium"
    >
      <FileDown size={20} />
      View Resume
    </a>
  );
};

export default ResumeButton;