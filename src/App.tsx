import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import { Divider, Group, Stack } from "@mantine/core";
import React, { useEffect, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "./images/IMG_5423.png"; // Replace with your actual image
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Engine } from "tsparticles-engine";
const App: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div>
    <Router>
      <div className="min-h-screen text-white flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',}}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "links",
          particles: {
            number: {
              value: 50,
            },
            move: {
              enable: true,
              speed: 1,
            },
            links: {
              enable: true,
              opacity: 0.5,
              color: "#ffffff",
            },
          },
          background: {
            color: "#000000",
          },
        }}
        className="absolute inset-0"
      />
      

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-left text-center min-w-2xl ">
        <Stack gap={20}>

      <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    height: '10vh',
    zIndex: 10,
}}>
  <Group justify="space-between" style={{ width: '100%' }}>
    <Link to="/" className="text-gray-400 px-6 flex" style={{ fontWeight: 'bold', zIndex: 100 }}>Home</Link>
  </Group>
</div>

        <div style={{
                  display: 'flex',
                  zIndex: '10'
              }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      </div>
      </Stack>

      <div>
      </div>
      </div>
      </div>
    </Router>
    </div>

  );
};

export default App;
