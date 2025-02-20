import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import { Group, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useMediaQuery } from "react-responsive";
import BlogItem from "./BlogItem";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const width = (window.innerWidth-5)/10 
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadLinksPreset(engine);
    }).then(() => setInit(true));
  }, []);

  
  return (
    <div>
      <Router>
        <div
          className="min-h-screen text-black flex flex-col items-center justify-center px-6 relative overflow-hidden"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          {init && (
            <Particles
              id="tsparticles"
              options={{
                particles: {
                  number: { value: width},
                  move: { enable: true, speed: 0.1 },
                  links: { enable: true, opacity: 0.3, color: "#010101" },
                  size: { value: 1 },
                },
                background: { color: "#f0f0f0" },
              }}
              className="absolute inset-0 z-[-1]"
            />
          )}

          <div className="relative z-10 flex flex-col items-left text-center min-w-2xl ">
            <Stack gap={20}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                  height: "10vh",
                  minWidth: "50vw",
                  zIndex: 10,
                }}>
                <Group
                  justify="space-between"
                  style={{ width: "100%", maxWidth: "50vw" }}>
                  <Link
                    to="/"
                    className="text-gray-400 px-6 flex"
                    style={{ fontWeight: "bold", zIndex: 100 }}>
                    Home
                  </Link>
                  <Link
                    to="/blog"
                    className="text-gray-400 px-6 flex"
                    style={{ fontWeight: "bold", zIndex: 100 }}>
                    Blog
                  </Link>
                </Group>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  zIndex: "10",
                }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogItem />} />
                </Routes>
              </div>
            </Stack>

            <div></div>
          </div>
        </div>
      </Router>
      <Analytics />
    </div>
  );
};

export default App;
