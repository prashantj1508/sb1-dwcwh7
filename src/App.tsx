import React from 'react';
import { ChevronDown, Code2, Briefcase, User2 } from 'lucide-react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import PersonalInfo from './components/PersonalInfo';
import ResumeButton from './components/ResumeButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <ResumeButton />
        </div>
        <ChevronDown size={32} className="absolute bottom-8 animate-bounce" />
      </section>

      {/* About Section with Personal Info */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User2 className="text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="rounded-lg shadow-xl mb-6"
              />
              <PersonalInfo />
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with 5 years of experience building web applications. 
                I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll 
                find me contributing to open-source projects or writing technical articles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="text-blue-400" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="E-Commerce Platform"
              description="A full-featured e-commerce platform built with React, Node.js, and MongoDB."
              image="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
              tags={['React', 'Node.js', 'MongoDB']}
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard 
              title="Task Management App"
              description="A collaborative task management tool with real-time updates using Socket.io."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              tags={['React', 'Socket.io', 'Express']}
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-blue-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold">Senior Developer @ Tech Corp</h3>
              <p className="text-gray-400">2020 - Present</p>
              <p className="text-gray-300 mt-2">
                Led development of multiple high-impact projects and mentored junior developers.
              </p>
            </div>
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold">Full Stack Developer @ StartupX</h3>
              <p className="text-gray-400">2018 - 2020</p>
              <p className="text-gray-300 mt-2">
                Developed and maintained multiple client projects using React and Node.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;