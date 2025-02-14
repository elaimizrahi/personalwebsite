import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  Stack,
  Group,
} from "@mantine/core";
const Blog: React.FC = () => {

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',}}>
  
        
  
        {/* Profile Section */}
        <div className="relative z-10 flex flex-col items-left text-center max-w-2xl ">
          <Stack gap={30}>
          {/* About Section */}
          <p className="mt-6 text-gray-400 px-6">
            Hey, I'm Elai Mizrahi! I'm a third-year Software Engineering student at the University of Waterloo who enjoys 
            building interesting and impactful software. My main interests center around databases, artificial intelligence, and full-stack development.
          </p>
  
          <p className="mt-4 text-gray-400">
            Previously, I interned as a Full-Stack Software Developer at <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://runql.com" className="text-blue-400">RunQL</a>. 
            I have also completed internships at <a style={{textDecoration: 'underline', fontWeight: 'bold'}} href="https://secoda.co" className="text-blue-400">Secoda (YC S21)</a> and <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://avante.io" className="text-blue-400">Avante IO</a> as a Software Engineering Intern. 
          </p>
  
          <p className="mt-4 text-gray-400">
            At the University of Waterloo, I represent my Software Engineering Cohort as the Academic and Engineering Society representative and have been part of the <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://www.uwaft.ca/" className="text-blue-400">UWAFT Design Team</a>.
          </p>
  
          {/* Social Links */}
          <p className="mt-6 text-gray-400">
            Feel free to view my on GitHub, connect with me on LinkedIn, or shoot me an email.
          </p>
          <Group justify="center">
            <a href="https://github.com/elaimizrahi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com/in/elai-mizrahi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="hover:text-blue-400" />
            </a>
            <a href="mailto:emizrahi@uwaterloo.ca">
              <FaEnvelope size={28} className="hover:text-blue-400" />
            </a>
          </Group>
          <Group justify="right">
  
          <p className="mt-8 text-gray-500 text-sm">© {new Date().getFullYear()} Elai Mizrahi</p>
          </Group>
  
          </Stack>
          </div>
          </div>
  );
};

export default Blog;
