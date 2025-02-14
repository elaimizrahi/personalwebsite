import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import { Group, Stack } from "@mantine/core";
import React, {  useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadLinksPreset } from "@tsparticles/preset-links"; // ✅ Import the preset

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Loads a smaller version of tsParticles
      await loadLinksPreset(engine); // ✅ Loads the "links" preset
    }).then(() => setInit(true));
  }, []);
  return (
    <div>
    <Router>
      <div className="min-h-screen text-white flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',}}>
{init && (
          <Particles
            id="tsparticles"
            options={{
              particles: {
                number: { value: 250 },
                move: { enable: true, speed: 0.1 },
                links: { enable: true, opacity: 0.5, color: "#ffffff" },
                size: { value: 1}
              },
              background: { color: '#101010'},
            }}
            className="absolute inset-0 z-[-1]"
          />
        )}
      

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
    {/* <Link to="/" className="text-gray-400 px-6 flex" style={{ fontWeight: 'bold', zIndex: 100 }}>Home</Link> */}
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
