import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "./images/IMG_5423.jpeg"; // Replace with your actual image
import {
  Stack,
  Group,
} from "@mantine/core";
const Home: React.FC = () => {

  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',}}>

      

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-left text-center max-w-2xl ">
        <Stack gap={30}>
        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt="Profile Pic"
            className=" rounded-full border-4 border-gray-700"
            style={{
              width: '20vh',
              height: '20vh'
            }}
          />
          <div className="text-left">
            <h1 style={{fontWeight: 'bolder', fontSize: '30px'}}>Elai Mizrahi</h1>
            <p className="text-lg text-gray-400">Software Engineering + AI @ UWaterloo</p>
          </div>
          </div>

        {/* About Section */}
        <p className="mt-6 text-gray-400 px-6">
          Hey, I'm <text style={{fontWeight: 'bold'}}>Elai</text>! I'm a third-year Software Engineering student at the <text style={{fontWeight: 'bold'}}>University of Waterloo</text>, currently seeking <text style={{fontWeight: 'bold'}}>2026 Internship Opportunities</text>. My main interests center around artificial intelligence, big data, and full-stack development.
        </p>

        <p className="mt-4 text-gray-400">
          Currently, I am interning at <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://vividseats.com/" className="text-blue-400">Vivid Seats</a> for Summer 2025. Previously, I worked as a Software Engineering Intern <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://runql.com" className="text-blue-400">RunQL</a>, <a style={{textDecoration: 'underline', fontWeight: 'bold'}} href="https://secoda.co" className="text-blue-400">Secoda (YC S21)</a> and <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://avante.io" className="text-blue-400">Avante IO</a>. 
        </p>

        <p className="mt-4 text-gray-400">
          At the University of Waterloo, I represent my Software Engineering Cohort as the Academic and Engineering Society representative and have been part of the <a style={{textDecoration: 'underline', fontWeight: 'bold'}}href="https://www.uwaft.ca/" className="text-blue-400">UWAFT Design Team</a>.
        </p>

        {/* Social Links */}
        <p className="mt-6 text-gray-400">
          Feel free to connect with me on LinkedIn, view my GitHub, or shoot me an email!
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

export default Home;
